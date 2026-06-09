const btnNovaMateria = document.getElementById("btnNovaMateria");
const modalMateria = document.getElementById("modalMateria");
const cancelar = document.getElementById("cancelar");
const btnSalvar = document.getElementById("salvar");
const listaMaterias = document.getElementById("listaMaterias");

let materias =
    JSON.parse(localStorage.getItem("materias"))
    || [];

let editandoIndex = null;

/* ==========================
   ABRIR MODAL
========================== */

if (btnNovaMateria) {
    btnNovaMateria.addEventListener("click", () => {

        editandoIndex = null;

        document.getElementById("nomeMateria").value = "";
        document.getElementById("corMateria").value = "#3B82F6";
        document.getElementById("periodoMateria").value = "bimestral";

        modalMateria.classList.add("active");
    });
}

/* ==========================
   FECHAR MODAL
========================== */

if (cancelar) {
    cancelar.addEventListener("click", () => {
        modalMateria.classList.remove("active");
    });
}

/* ==========================
   SALVAR MATÉRIA
========================== */

function salvarMateria() {

    const nome =
        document.getElementById("nomeMateria").value;

    const cor =
        document.getElementById("corMateria").value;

    const periodo =
        document.getElementById("periodoMateria").value;

    if (!nome) {
        alert("Digite um nome para a matéria.");
        return;
    }

    if (editandoIndex === null) {

        materias.push({
            nome,
            cor,
            periodo,

            notas: [],
            media: 0,
            mediaMaxima: 10,
            situacao: "Sem notas"
        });

    } else {

        materias[editandoIndex] = {
            ...materias[editandoIndex],

            nome,
            cor,
            periodo
        };

        editandoIndex = null;
    }

    localStorage.setItem(
        "materias",
        JSON.stringify(materias)
    );

    renderMaterias();

    modalMateria.classList.remove("active");
}

if (btnSalvar) {
    btnSalvar.addEventListener(
        "click",
        salvarMateria
    );
}

/* ==========================
   EDITAR MATÉRIA
========================== */

function editarMateria(index) {

    const materia = materias[index];

    editandoIndex = index;

    document.getElementById("nomeMateria").value =
        materia.nome;

    document.getElementById("corMateria").value =
        materia.cor;

    document.getElementById("periodoMateria").value =
        materia.periodo;

    modalMateria.classList.add("active");
}

/* ==========================
   DELETAR MATÉRIA
========================== */

function deletarMateria(index) {

    materias.splice(index, 1);

    localStorage.setItem(
        "materias",
        JSON.stringify(materias)
    );

    renderMaterias();
}

/* ==========================
   RENDERIZAR MATÉRIAS
========================== */

function renderMaterias() {

    if (!listaMaterias) return;

    listaMaterias.innerHTML = "";

    materias.forEach((materia, index) => {

        const div = document.createElement("div");

        div.classList.add("materia-card");

        div.innerHTML = `
            <div class="materia-row">

                <div class="materia-col materia-nome">

                    <div
                        class="materia-cor"
                        style="background:${materia.cor}"
                    ></div>

                    <div>
                        <strong>${materia.nome}</strong>
                        <p>${materia.periodo}</p>
                    </div>

                </div>

                <div class="materia-col">
                    <strong>${materia.media}%</strong>
                </div>

                <div class="materia-col">
                    <span class="status">
                        ${materia.situacao}
                    </span>
                </div>

                <div class="materia-col">

                    <div class="progress-container">
                        <div
                            class="progress-fill"
                            style="width:${materia.media}%"
                        ></div>
                    </div>

                </div>

                <div class="materia-col">

                    <button
                        class="btn-edit"
                        onclick="editarMateria(${index})"
                    >
                        Editar
                    </button>

                    <button
                        class="btn-delete"
                        onclick="deletarMateria(${index})"
                    >
                        Excluir
                    </button>

                </div>

            </div>
        `;

        listaMaterias.appendChild(div);
    });
}

/* ==========================
   DISPONIBILIZA FUNÇÕES
========================== */

window.editarMateria = editarMateria;
window.deletarMateria = deletarMateria;

/* ==========================
   INICIALIZA
========================== */

renderMaterias();