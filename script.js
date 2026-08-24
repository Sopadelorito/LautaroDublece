/* =========================================================
   JK SEGUROS
   SCRIPT PRINCIPAL
========================================================= */


/* =========================================================
   CONFIGURACIÓN
========================================================= */

const WHATSAPP = "5493765297561";


/* =========================================================
   BASE DE VEHÍCULOS

   La estructura permite agregar fácilmente nuevas marcas,
   modelos y años.

   Los años se generan automáticamente para evitar tener
   que escribir cada año manualmente.
========================================================= */

const VEHICULOS = {

    "Alfa Romeo": [
        "Giulia",
        "Stelvio",
        "Tonale"
    ],

    "Audi": [
        "A1",
        "A3",
        "A4",
        "A5",
        "A6",
        "A7",
        "A8",
        "Q2",
        "Q3",
        "Q5",
        "Q7",
        "Q8"
    ],

    "BMW": [
        "Serie 1",
        "Serie 2",
        "Serie 3",
        "Serie 4",
        "Serie 5",
        "Serie 7",
        "X1",
        "X2",
        "X3",
        "X4",
        "X5",
        "X6",
        "X7"
    ],

    "Chevrolet": [
        "Agile",
        "Aveo",
        "Blazer",
        "Celta",
        "Classic",
        "Corsa",
        "Cruze",
        "Equinox",
        "Montana",
        "Onix",
        "Prisma",
        "S10",
        "Spin",
        "Tracker",
        "Trailblazer",
        "Captiva",
        "Meriva"
    ],

    "Citroën": [
        "Berlingo",
        "C3",
        "C3 Aircross",
        "C4",
        "C4 Cactus",
        "C4 Lounge",
        "C4 Picasso",
        "C5 Aircross",
        "Jumpy",
        "Jumper"
    ],

    "Fiat": [
        "500",
        "Argo",
        "Cronos",
        "Doblo",
        "Ducato",
        "Fiorino",
        "Grand Siena",
        "Mobi",
        "Palio",
        "Punto",
        "Siena",
        "Strada",
        "Toro",
        "Uno",
        "Idea"
    ],

    "Ford": [
        "Bronco",
        "EcoSport",
        "Edge",
        "Escort",
        "Fiesta",
        "Focus",
        "Ka",
        "Kuga",
        "Maverick",
        "Mondeo",
        "Mustang",
        "Ranger",
        "Territory",
        "Transit"
    ],

    "Honda": [
        "Accord",
        "Civic",
        "City",
        "CR-V",
        "HR-V",
        "WR-V",
        "Fit"
    ],

    "Hyundai": [
        "Accent",
        "Creta",
        "Elantra",
        "HB20",
        "Santa Fe",
        "Tucson",
        "Veloster",
        "Kona"
    ],

    "Jeep": [
        "Cherokee",
        "Compass",
        "Gladiator",
        "Grand Cherokee",
        "Renegade",
        "Wrangler",
        "Commander"
    ],

    "Kia": [
        "Carnival",
        "Cerato",
        "Picanto",
        "Rio",
        "Seltos",
        "Sportage",
        "Sorento"
    ],

    "Mercedes-Benz": [
        "Clase A",
        "Clase C",
        "Clase E",
        "Clase G",
        "Clase GLA",
        "Clase GLB",
        "Clase GLC",
        "Clase GLE",
        "Sprinter",
        "Vito"
    ],

    "Nissan": [
        "Frontier",
        "Kicks",
        "March",
        "Sentra",
        "Versa",
        "X-Trail",
        "Murano"
    ],

    "Peugeot": [
        "208",
        "2008",
        "308",
        "408",
        "3008",
        "5008",
        "Partner",
        "Expert",
        "Boxer"
    ],

    "Renault": [
        "Alaskan",
        "Captur",
        "Clio",
        "Duster",
        "Fluence",
        "Kangoo",
        "Kwid",
        "Logan",
        "Master",
        "Oroch",
        "Sandero",
        "Stepway",
        "Symbol",
        "Megane"
    ],

    "Toyota": [
        "Corolla",
        "Corolla Cross",
        "Etios",
        "Hilux",
        "SW4",
        "Yaris",
        "RAV4",
        "Camry",
        "Hiace",
        "Innova"
    ],

    "Volkswagen": [
        "Amarok",
        "Bora",
        "Fox",
        "Gol",
        "Golf",
        "Nivus",
        "Polo",
        "Saveiro",
        "Suran",
        "Taos",
        "T-Cross",
        "Tiguan",
        "Touareg",
        "Virtus",
        "Vento",
        "Up!"
    ],

    "Volvo": [
        "EX30",
        "XC40",
        "XC60",
        "XC90",
        "S60",
        "S90"
    ],

    "RAM": [
        "700",
        "1200",
        "1500",
        "2500",
        "3500"
    ],

    "Chery": [
        "Tiggo 2",
        "Tiggo 3",
        "Tiggo 4",
        "Tiggo 5",
        "Tiggo 7",
        "Tiggo 8"
    ],

    "DS": [
        "DS 3",
        "DS 4",
        "DS 7",
        "DS 9"
    ],

    "JAC": [
        "S2",
        "S3",
        "S4",
        "T6",
        "T8"
    ],

    "Mitsubishi": [
        "L200",
        "Montero",
        "Outlander",
        "ASX"
    ],

    "Subaru": [
        "Forester",
        "Impreza",
        "Outback",
        "XV"
    ]

};


/* =========================================================
   MOTOS

   Base inicial de marcas y modelos comercializados /
   utilizados en Argentina.
========================================================= */

const MOTOS = {

    "Bajaj": [
        "Boxer",
        "Rouser NS 125",
        "Rouser NS 160",
        "Rouser NS 200",
        "Rouser RS 200",
        "Dominar 250",
        "Dominar 400"
    ],

    "Benelli": [
        "302S",
        "Leoncino 250",
        "Leoncino 500",
        "TRK 251",
        "TRK 502",
        "TRK 702"
    ],

    "BMW Motorrad": [
        "G 310 R",
        "G 310 GS",
        "F 750 GS",
        "F 850 GS",
        "F 900 R",
        "F 900 XR",
        "R 1250 GS",
        "S 1000 RR"
    ],

    "Corven": [
        "Energy 110",
        "Energy 125",
        "Hunter 150",
        "Triax 150",
        "Triax 250",
        "Expert 250"
    ],

    "Gilera": [
        "Smash",
        "VC 150",
        "Sahel",
        "SMX 200",
        "AC4"
    ],

    "Honda": [
        "Wave",
        "GLH 150",
        "CB 125F",
        "CB 190R",
        "CB 250 Twister",
        "XR 150L",
        "XR 190L",
        "XR 250 Tornado",
        "CB 300F",
        "CB 500F",
        "CB 500X",
        "Africa Twin"
    ],

    "Kawasaki": [
        "Ninja 400",
        "Ninja 650",
        "Ninja ZX-6R",
        "Ninja ZX-10R",
        "Z400",
        "Z650",
        "Z900",
        "Versys 650",
        "Versys 1000"
    ],

    "Keller": [
        "Classic 110",
        "Crono Classic",
        "Stratus",
        "Mirage",
        "MT 110",
        "Conquer"
    ],

    "Motomel": [
        "Blitz 110",
        "Skua 150",
        "Skua 250",
        "S2",
        "SR 200",
        "CX 150",
        "X3M"
    ],

    "Royal Enfield": [
        "Hunter 350",
        "Meteor 350",
        "Classic 350",
        "Himalayan",
        "Interceptor 650",
        "Continental GT 650"
    ],

    "Suzuki": [
        "AX 100",
        "GN 125",
        "GSX 125",
        "GSX-S 150",
        "GSX-R 150",
        "V-Strom 650",
        "V-Strom 1050"
    ],

    "Yamaha": [
        "Crypton",
        "FZ 25",
        "FZ-S",
        "XTZ 125",
        "Xtz 250",
        "Xtz 250 Lander",
        "R3",
        "MT-03",
        "MT-07",
        "MT-09",
        "Tenere 700",
        "YZF-R3"
    ],

    "Zanella": [
        "ZB 110",
        "Due 110",
        "RX 150",
        "ZR 150",
        "Patagonian Eagle",
        "Styler",
        "Sapucai",
        "Ceccato"
    ]

};


/* =========================================================
   AÑOS
========================================================= */

function generarAnios() {

    const actual = new Date().getFullYear();

    const anios = [];

    for (
        let anio = actual;
        anio >= 1980;
        anio--
    ) {

        anios.push(anio);

    }

    return anios;
}


const ANIOS = generarAnios();


/* =========================================================
   VARIABLES DE ESTADO
========================================================= */

let tipoCotizacion = "";
let tipoVehiculo = "";
let baseActual = {};


/* =========================================================
   ELEMENTOS DEL DOM
========================================================= */

const modalComercio =
    document.getElementById("modalComercio");

const modalCotizacion =
    document.getElementById("modalCotizacion");

const btnComercio =
    document.getElementById("btnComercio");

const cerrarComercioBtn =
    document.getElementById("cerrarComercio");

const tipoSeleccionado =
    document.getElementById("tipoSeleccionado");

const camposVehiculo =
    document.getElementById("camposVehiculo");

const campoPersona =
    document.getElementById("campoPersona");

const campoObjeto =
    document.getElementById("campoObjeto");

const marcaSelect =
    document.getElementById("vehiculoMarca");

const modeloSelect =
    document.getElementById("vehiculoModelo");

const anioSelect =
    document.getElementById("vehiculoAnio");


/* =========================================================
   INICIALIZAR
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        prepararMarcas();

        prepararAnios();

        configurarEventos();

    }
);


/* =========================================================
   PREPARAR MARCAS
========================================================= */

function prepararMarcas() {

    if (!marcaSelect) {
        return;
    }

    marcaSelect.innerHTML =
        '<option value="">Seleccioná una marca</option>';

}


/* =========================================================
   CARGAR MARCAS
========================================================= */

function cargarMarcas(base) {

    marcaSelect.innerHTML =
        '<option value="">Seleccioná una marca</option>';

    Object.keys(base)
        .sort()
        .forEach(function (marca) {

            const option =
                document.createElement("option");

            option.value = marca;

            option.textContent = marca;

            marcaSelect.appendChild(option);

        });

}


/* =========================================================
   CARGAR MODELOS
========================================================= */

function cargarModelos(marca) {

    // Limpiar modelos anteriores
    modeloSelect.innerHTML =
        '<option value="">Seleccioná un modelo</option>';

    /*
       CORRECCIÓN:
       Antes de cargar los modelos se vuelven a cargar
       los años. Esto evita que el selector quede
       bloqueado en "Seleccioná el año".
    */
    prepararAnios();

    if (!marca || !baseActual[marca]) {
        return;
    }

    baseActual[marca]
        .forEach(function (modelo) {

            const option =
                document.createElement("option");

            option.value = modelo;

            option.textContent = modelo;

            modeloSelect.appendChild(option);

        });

}


/* =========================================================
   PREPARAR AÑOS
========================================================= */

function prepararAnios() {

    anioSelect.innerHTML =
        '<option value="">Seleccioná el año</option>';

    ANIOS.forEach(function (anio) {

        const option =
            document.createElement("option");

        option.value = anio;

        option.textContent = anio;

        anioSelect.appendChild(option);

    });

}


/* =========================================================
   CAMBIAR MARCA
========================================================= */

marcaSelect.addEventListener(
    "change",
    function () {

        cargarModelos(this.value);

    }
);


/* =========================================================
   CONFIGURAR EVENTOS
========================================================= */

function configurarEventos() {

    if (btnComercio) {

        btnComercio.addEventListener(
            "click",
            abrirComercio
        );

    }


    if (cerrarComercioBtn) {

        cerrarComercioBtn.addEventListener(
            "click",
            cerrarComercio
        );

    }


    if (modalComercio) {

        modalComercio.addEventListener(
            "click",
            function (evento) {

                if (
                    evento.target ===
                    modalComercio
                ) {

                    cerrarComercio();

                }

            }
        );

    }


    if (modalCotizacion) {

        modalCotizacion.addEventListener(
            "click",
            function (evento) {

                if (
                    evento.target ===
                    modalCotizacion
                ) {

                    cerrarCotizacion();

                }

            }
        );

    }

}


/* =========================================================
   ABRIR COMERCIO EXTERIOR
========================================================= */

function abrirComercio() {

    modalComercio.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   CERRAR COMERCIO EXTERIOR
========================================================= */

function cerrarComercio() {

    modalComercio.classList.remove("active");

    if (
        !modalCotizacion.classList.contains("active")
    ) {

        document.body.style.overflow = "";

    }

}


/* =========================================================
   ABRIR COTIZACIÓN
========================================================= */

function abrirCotizacion(tipo) {

    tipoCotizacion = tipo;

    tipoSeleccionado.textContent = tipo;

    resetearCampos();


    /*
       AUTO
    */

    if (tipo === "Auto") {

        tipoVehiculo = "Auto";

        baseActual = VEHICULOS;

        camposVehiculo.classList.remove("hidden");

        cargarMarcas(baseActual);

        prepararAnios();

    }


    /*
       MOTO
    */

    else if (tipo === "Moto") {

        tipoVehiculo = "Moto";

        baseActual = MOTOS;

        camposVehiculo.classList.remove("hidden");

        cargarMarcas(baseActual);

        prepararAnios();

    }


    /*
       VIDA
    */

    else if (tipo === "Seguro de Vida") {

        tipoVehiculo = "";

        campoPersona.classList.remove("hidden");

    }


    /*
       OBJETOS
    */

    else if (
        tipo === "Valoración de objetos"
    ) {

        tipoVehiculo = "";

        campoObjeto.classList.remove("hidden");

    }


    /*
       OTROS
    */

    else {

        tipoVehiculo = "";

    }


    modalCotizacion.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   RESETEAR CAMPOS
========================================================= */

function resetearCampos() {

    camposVehiculo.classList.add("hidden");

    campoPersona.classList.add("hidden");

    campoObjeto.classList.add("hidden");


    marcaSelect.value = "";

    modeloSelect.innerHTML =
        '<option value="">Seleccioná un modelo</option>';

    anioSelect.innerHTML =
        '<option value="">Seleccioná el año</option>';


    document.getElementById(
        "datosPersona"
    ).value = "";


    document.getElementById(
        "datosObjeto"
    ).value = "";


    document.getElementById(
        "datosExtra"
    ).value = "";

}


/* =========================================================
   CERRAR COTIZACIÓN
========================================================= */

function cerrarCotizacion() {

    modalCotizacion.classList.remove("active");

    if (
        !modalComercio.classList.contains("active")
    ) {

        document.body.style.overflow = "";

    }

}


/* =========================================================
   CONSTRUIR DATOS DEL VEHÍCULO
========================================================= */

function obtenerDatosVehiculo() {

    const marca =
        marcaSelect.value;

    const modelo =
        modeloSelect.value;

    const anio =
        anioSelect.value;


    const partes = [];


    if (marca) {

        partes.push(marca);

    }


    if (modelo) {

        partes.push(modelo);

    }


    if (anio) {

        partes.push(anio);

    }


    return partes.join(" ");

}


/* =========================================================
   ENVIAR COTIZACIÓN
========================================================= */

function enviarCotizacion() {

    let detalle = "";


    /*
       AUTO O MOTO
    */

    if (
        tipoCotizacion === "Auto" ||
        tipoCotizacion === "Moto"
    ) {

        detalle =
            obtenerDatosVehiculo();

    }


    /*
       VIDA
    */

    else if (
        tipoCotizacion === "Seguro de Vida"
    ) {

        detalle =
            document.getElementById(
                "datosPersona"
            ).value.trim();

    }


    /*
       OBJETOS
    */

    else if (
        tipoCotizacion ===
        "Valoración de objetos"
    ) {

        detalle =
            document.getElementById(
                "datosObjeto"
            ).value.trim();

    }


    /*
       INFORMACIÓN EXTRA
    */

    const extra =
        document.getElementById(
            "datosExtra"
        ).value.trim();


    /*
       MENSAJE CORTO
    */

    let mensaje =
        "Hola! Quisiera saber la cotización de " +
        tipoCotizacion;


    if (detalle) {

        mensaje +=
            ": " + detalle;

    }


    if (extra) {

        mensaje +=
            ". " + extra;

    }


    mensaje += ".";


    abrirWhatsAppConMensaje(mensaje);

}


/* =========================================================
   WHATSAPP DIRECTO
========================================================= */

function abrirWhatsApp(tipo) {

    const mensaje =
        "Hola! Quisiera saber la cotización de " +
        tipo +
        ".";

    abrirWhatsAppConMensaje(mensaje);

}


/* =========================================================
   ABRIR WHATSAPP
========================================================= */

function abrirWhatsAppConMensaje(mensaje) {

    const url =
        "https://wa.me/" +
        WHATSAPP +
        "?text=" +
        encodeURIComponent(mensaje);


    window.open(
        url,
        "_blank"
    );

}


/* =========================================================
   ESC PARA CERRAR
========================================================= */

document.addEventListener(
    "keydown",
    function (evento) {

        if (evento.key === "Escape") {

            cerrarCotizacion();

            cerrarComercio();

        }

    }
);


/* =========================================================
   CERRAR MODALES AL HACER CLICK
========================================================= */

window.addEventListener(
    "click",
    function (evento) {

        if (
            evento.target === modalComercio
        ) {

            cerrarComercio();

        }


        if (
            evento.target === modalCotizacion
        ) {

            cerrarCotizacion();

        }

    }
);


/* =========================================================
   VALIDACIÓN DE VEHÍCULOS
========================================================= */

function validarVehiculo() {

    if (!tipoVehiculo) {

        return true;

    }


    const marca =
        marcaSelect.value;

    const modelo =
        modeloSelect.value;

    const anio =
        anioSelect.value;


    if (!marca) {

        alert(
            "Seleccioná la marca del vehículo."
        );

        return false;

    }


    if (!modelo) {

        alert(
            "Seleccioná el modelo del vehículo."
        );

        return false;

    }


    if (!anio) {

        alert(
            "Seleccioná el año del vehículo."
        );

        return false;

    }


    return true;

}


/* =========================================================
   EVENTO DE ENVÍO
========================================================= */

const botonEnviar =
    document.querySelector(
        ".send-whatsapp"
    );


if (botonEnviar) {

    botonEnviar.addEventListener(
        "click",
        function (evento) {

            if (
                tipoVehiculo &&
                !validarVehiculo()
            ) {

                evento.preventDefault();

                return;

            }

        }
    );

}


/* =========================================================
   FUNCIONES AUXILIARES
========================================================= */

function seleccionarPrimeraOpcion(select) {

    if (
        select &&
        select.options.length > 0
    ) {

        select.selectedIndex = 0;

    }

}


function limpiarTexto(texto) {

    return texto
        .replace(/\s+/g, " ")
        .trim();

}


/* =========================================================
   FIN DEL SCRIPT
========================================================= */