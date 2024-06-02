<template>
    <div>
      <b-container fluid class="custom-conteiner3">
        <b-container>
          <br><br>
          <b-row cols="2">
            <b-col cols="3">
              <b-card img-src="https://albertbv03.github.io/anitab/img/koi-7923737_1280.jpg" img-alt="Tortuga Hicotea" overlay></b-card>
            </b-col>
            <b-col cols="9">
              <b-card
                title="Peces"
                tag="article"
                class="mb-2 card-custom1 text-light"
              >
                <b-card-text>
                  Los peces son animales vertebrados primariamente acuáticos, generalmente ectotérmicos y con respiración por branquias. Suelen estar recubiertos por escamas, y están dotados de aletas, que permiten su movimiento continuo en los medios acuáticos, y branquias, con las que captan el oxígeno disuelto en el agua.
                </b-card-text>
  
                <b-button @click="toggleAccordion1" variant="primary" v-b-popover.hover.left="'Abre la Galeria de Peces'" title="Galeria de Peces">Galeria de Peces</b-button>
                <b-collapse v-model="showAccordion1">
                    <b-card-body>
                    <!-- Inicio de Especies -->
                    <b-row>
                        <b-col>
                            <b-button @click="openModal1" class="invisible-button">
                                <b-card img-src="https://albertbv03.github.io/anitab/img/fish-556555_640.jpg" img-alt="Besugo imagen" overlay img-width="300px" img-height="200px"></b-card>
                            </b-button>
                        </b-col>
                        <b-col>
                            <b-button @click="openModal2" class="invisible-button">
                            <b-card img-src="https://albertbv03.github.io/anitab/img/fish-3410329_640.png" img-alt="Jurel Imagen" overlay img-width="300px" img-height="200px"></b-card>
                            </b-button>
                        </b-col>
                    </b-row>
                    </b-card-body>
                </b-collapse>
              </b-card>
            </b-col>
          </b-row>
          <br><br>
        </b-container>
      </b-container>

    <b-container fluid class="custom-conteiner2">
        <b-container>
            <br><br>
            <b-row cols="2">
            <b-col cols="3">
                <b-card img-src="https://albertbv03.github.io/anitab/img/siamese-crocodile-8509003_640.jpg" img-alt="Caiman imagen" overlay></b-card>
            </b-col>
            <b-col cols="9">
                <b-card
                title="Reptiles"
                tag="article"
                class="mb-2 card-custom2 text-light"
                >
                <b-card-text>
                Los reptiles son animales vertebrados que se caracterizan por su piel escamosa y la mayoría de las especies son ovíparas, es decir, ponen huevos. Son ectotérmicos, lo que significa que dependen del ambiente externo para regular su temperatura corporal. Incluyen animales como lagartos, serpientes, tortugas y cocodrilos.
                </b-card-text>

                <b-button @click="toggleAccordion2" variant="primary" v-b-popover.hover.left="'Abre la Galeria de los Reptiles'" title="Galeria de los Reptiles">Galeria de Reptiles</b-button>
                <b-collapse v-model="showAccordion2">
                    <b-card-body>
                    <!-- Inicio de Especies -->
                    <b-row>
                        <b-col>
                            <b-button @click="openModal3" class="invisible-button">
                                <b-card img-src="https://albertbv03.github.io/anitab/img/alligator-169118_640.jpg" img-alt="Cocodrilo de pantano imagen" overlay img-width="300px" img-height="200px"></b-card>
                            </b-button>
                        </b-col>
                        <b-col>
                            <b-button @click="openModal4" class="invisible-button">
                            <b-card img-src="https://albertbv03.github.io/anitab/img/turtle-5568624_640.jpg" img-alt="Tortuga mojina de monte imagen" overlay img-width="300px" img-height="200px"></b-card>
                            </b-button>
                        </b-col>
                    </b-row>
                    </b-card-body>
                </b-collapse>
                </b-card>
            </b-col>
            </b-row>
            <br><br>
        </b-container>
    </b-container>

    <b-container fluid class="custom-conteiner3">
        <b-container>
            <br><br>
            <b-row cols="2">
            <b-col cols="3">
                <b-card img-src="https://albertbv03.github.io/anitab/img/dolphin-203875_640.jpg" img-alt="Caiman imagen" overlay></b-card>
            </b-col>
            <b-col cols="9">
                <b-card
                title="Mamíferos"
                tag="article"
                class="mb-2 card-custom1 text-light"
                >
                <b-card-text>
                Los mamíferos son animales vertebrados que se caracterizan por tener glándulas mamarias que les permiten alimentar a sus crías con leche. Incluyen una amplia variedad de especies, desde los grandes elefantes hasta los pequeños roedores.
                </b-card-text>

                <b-button @click="toggleAccordion3" variant="primary" v-b-popover.hover.left="'Abre la Galeria de los Mamíferos'" title="Galeria de los Mamíferos">Galeria de Mamíferos</b-button> <b-badge variant="light">Nuevo</b-badge>
                <b-collapse v-model="showAccordion3">
                    <b-card-body>
                    <!-- Inicio de Especies -->
                    <b-row>
                        <b-col>
                            <b-button @click="openModal5" class="invisible-button">
                                <b-card img-src="https://albertbv03.github.io/anitab/img/manatee-387195_640.jpg" img-alt="Cocodrilo de pantano imagen" overlay img-width="300px" img-height="200px"></b-card>
                            </b-button>
                        </b-col>
                        <b-col>
                            <b-button @click="openModal6" class="invisible-button">
                            <b-card img-src="https://albertbv03.github.io/anitab/img/otter-7307280_640.jpg" img-alt="Tortuga mojina de monte imagen" overlay img-width="300px" img-height="200px"></b-card>
                            </b-button>
                        </b-col>
                    </b-row>
                    </b-card-body>
                </b-collapse>
                </b-card>
            </b-col>
            </b-row>
            <br><br>
        </b-container>
    </b-container>


    <!-- Modal 1 -->
    <b-modal v-model="modalVisible1" title="Jurel" centered hide-header-close size="lg" ok-only>
      <b-row>
        <b-col sm="12" md="3">
          <b-img src="https://albertbv03.github.io/anitab/img/fish-556555_640.jpg" img-alt="Jurel" fluid></b-img>
        </b-col>
        <b-col sm="12" md="9">
        El jurel es un pez de color azul y vientre blanco, perteneciente a la familia Carangidae, se caracteriza por tener un cuerpo alargado que mide entre 20 y 50 centímetros, con una línea lateral muy marcada y una mancha oscura en el opérculo (aleta de hueso duro que cubre y protege las branquias). En diversas regiones se le conoce como “chicharrón” o “chicharrilla” en función de su tamaño. Se alimenta de peces pequeños, crustáceos y calamares.
        </b-col>
      </b-row>
    </b-modal>

    <!-- Modal 2 -->
    <b-modal v-model="modalVisible2" title="Besugo" centered hide-header-close size="lg" ok-only>
      <b-row>
        <b-col sm="12" md="3">
          <b-img src="https://albertbv03.github.io/anitab/img/fish-3410329_640.png" img-alt="Besugo" fluid></b-img>
        </b-col>
        <b-col sm="12" md="9">
        También llamado voraz o pancho. Es un pescado blanco, semigraso e incluso en invierno se convierte en pescado azul por su contenido en grasa. Es un pescado espárido y de agua salada. Es un importante pez de consumo humano por lo que se pesca intensamente.
        </b-col>
      </b-row>
    </b-modal>

    <!-- Modal 3 -->
    <b-modal v-model="modalVisible3" title="Cocodrilo de Pantano" centered hide-header-close size="lg" ok-only>
      <b-row>
        <b-col sm="12" md="3">
          <b-img src="https://albertbv03.github.io/anitab/img/alligator-169118_640.jpg" img-alt="Cocodrilo de Pantano" fluid></b-img>
        </b-col>
        <b-col sm="12" md="9">
        El cocodrilo de pantano es una especie de reptil semiacuático que habita en zonas tropicales y subtropicales. Su cuerpo está cubierto por escamas duras y tiene una mandíbula potente con dientes afilados. Se alimenta principalmente de peces, aves y mamíferos que se acercan al agua para beber. Es un depredador temido en su hábitat natural y tiene un papel importante en el equilibrio ecológico de los ecosistemas acuáticos
        </b-col>
      </b-row>
    </b-modal>

    <!-- Modal 4 -->
    <b-modal v-model="modalVisible4" title="Tortuga Mojina de Monte" centered hide-header-close size="lg" ok-only>
      <b-row>
        <b-col sm="12" md="3">
          <b-img src="https://albertbv03.github.io/anitab/img/turtle-5568624_640.jpg" img-alt="Tortuga Mojina de Monte" fluid></b-img>
        </b-col>
        <b-col sm="12" md="9">
        La tortuga Mojina de Monte es una especie de tortuga terrestre que habita en regiones montañosas y boscosas. Se caracteriza por su caparazón abombado y su piel rugosa. Es herbívora y se alimenta principalmente de hojas, frutas y vegetación. Esta tortuga juega un papel importante en la dispersión de semillas y en la regulación de la vegetación en su hábitat natural.
        </b-col>
      </b-row>
    </b-modal>

    <!-- Modal 5 -->
    <b-modal v-model="modalVisible5" title="Manatí del Caribe" centered hide-header-close size="lg" ok-only>
      <b-row>
        <b-col sm="12" md="3">
          <b-img src="https://albertbv03.github.io/anitab/img/manatee-387195_640.jpg" img-alt="Manatí del Caribe" fluid></b-img>
        </b-col>
        <b-col sm="12" md="9">
        El manatí del Caribe, también conocido como "vacas marinas", es una especie de mamífero marino herbívoro. Son conocidos por su naturaleza tranquila y suelen habitar en aguas cálidas y poco profundas en el Caribe y algunas partes de América del Sur. Se alimentan principalmente de plantas acuáticas y pueden alcanzar tamaños considerablemente grandes.
        </b-col>
      </b-row>
    </b-modal>

    <!-- Modal 6 -->
    <b-modal v-model="modalVisible6" title="Nutria de Río" centered hide-header-close size="lg" ok-only>
      <b-row>
        <b-col sm="12" md="3">
          <b-img src="https://albertbv03.github.io/anitab/img/otter-7307280_640.jpg" img-alt="Nutria de Río" fluid></b-img>
        </b-col>
        <b-col sm="12" md="9">
        La nutria de río es un mamífero semiacuático conocido por su agilidad en el agua. Tiene un pelaje denso y repelente al agua que le permite mantenerse seca mientras nada. Se alimenta principalmente de peces, crustáceos y otros organismos acuáticos. Son animales sociales que suelen vivir en grupos familiares y construyen madrigueras en las riberas de los ríos y lagos.
        </b-col>
      </b-row>
    </b-modal>
    

    </div>
  </template>
  
<script>
import { ref } from 'vue';

export default {
  setup() {
    //Acordeones
    const showAccordion1 = ref(false);
    const showAccordion2 = ref(false);
    const showAccordion3 = ref(false);

    //Modales
    const modalVisible1 = ref(false);
    const modalVisible2 = ref(false);
    const modalVisible3 = ref(false);
    const modalVisible4 = ref(false);
    const modalVisible5 = ref(false);
    const modalVisible6 = ref(false);

    const toggleAccordion1 = () => {
      showAccordion1.value = !showAccordion1.value;
    };

    const toggleAccordion2 = () => {
      showAccordion2.value = !showAccordion2.value;
    };

    const toggleAccordion3 = () => {
      showAccordion3.value = !showAccordion3.value;
    };

    const openModal1 = () => {
      modalVisible1.value = true;
    };

    const openModal2 = () => {
      modalVisible2.value = true;
    };
    
    const openModal3 = () => {
      modalVisible3.value = true;
    };

    const openModal4 = () => {
      modalVisible4.value = true;
    };

    const openModal5 = () => {
      modalVisible5.value = true;
    };

    const openModal6 = () => {
      modalVisible6.value = true;
    };

    return {
        // Acordeones
        showAccordion1,
        showAccordion2,
        showAccordion3,
        toggleAccordion1,
        toggleAccordion2,
        toggleAccordion3,

        //Modales
        modalVisible1,
        openModal1,
        modalVisible2,
        openModal2,
        modalVisible3,
        openModal3,
        modalVisible4,
        openModal4,
        modalVisible5,
        openModal5,
        modalVisible6,
        openModal6,
    };
  }
};
</script>

<style>
    .invisible-button {
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    font-size: inherit;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    }
</style>
  