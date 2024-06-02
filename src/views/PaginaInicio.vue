<template>
<div>
    <b-container fluid class="text-light custom-conteiner1">
        <div class="bg-image-url">
            <b-container>
                <br><br>
                <b-row class="text-end">
                    <b-col sm="12" md="6">
                    </b-col>
                    <b-col sm="12" md="6" mt="">
                        <h1>Animales Acuaticos del Estado de Tabasco</h1>
                        <p>Explora el fascinante mundo de los animales acuáticos de Tabasco mientras te sumerges en la riqueza de sus humedales y ríos sinuosos. Esta región única, bendecida con una abundancia de agua, es el hogar de una amplia variedad de especies adaptadas a la vida acuática.</p>
                    </b-col>
                </b-row>
                <br><br>
                <div class="text-end">
                    Imagen de <a href="https://pixabay.com/es/users/12019-12019/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=86425" target="_blank">12019</a> en <a href="https://pixabay.com/es//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=86425" target="_blank">Pixabay</a>
                </div>  
            </b-container>
        </div>
    </b-container>
    <b-container fluid class="custom-conteiner2">
        <b-container>
            <br><br>
            <b-row>
                <b-col sm="12" md="4">
                    <b-card
                        title="Misión"
                        img-src="https://albertbv03.github.io/anitab/img/cyclist-5217020_640.jpg"
                        img-alt="Ciclista"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                        <b-card-text>
                        Dar a conocer la diversa variedad de especies que habitan en tabasco.
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col sm="12" md="4">
                    <b-card
                        title="Visión"
                        img-src="https://albertbv03.github.io/anitab/img/investment-5241253_640.jpg"
                        img-alt="Planta creciendo"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                        <b-card-text>
                        Permanecer como una fuente de información confiable para cualquier público.
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col sm="12" md="4" lg="4">
                    <b-card
                        title="Valores"
                        img-src="https://albertbv03.github.io/anitab/img/elder-2381649_1280.jpg"
                        img-alt="Planta creciendo"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                        <b-card-text>
                        Tener en cuenta la confianza, el respeto y la responsabilidad de dar información confiable dando créditos a las fuentes consultadas.
                        </b-card-text>
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
                    <b-card img-src="https://albertbv03.github.io/anitab/img/cumberland-slider-8038054_1280.jpg" img-alt="Tortuga Hicotea" overlay></b-card>
                </b-col>
                <b-col cols="9">
                    <b-card
                        title="Qué animales acuáticos habitan en tabasco?"
                        tag="article"
                        class="mb-2 card-custom text-light"
                    >
                        <b-card-text>
                            Explora el fascinante mundo de los animales acuáticos de Tabasco mientras te sumerges en la riqueza de sus humedales y ríos sinuosos. Esta región única, bendecida con una abundancia de agua, es el hogar de una amplia variedad de especies adaptadas a la vida acuática.
                        </b-card-text>

                        <b-button variant="primary" :to="{name:'especies'}" v-b-popover.hover.right="'Navega a la Galeria de Especies'" title="Ir a Galeria de Especies">Galeria de Especies</b-button>
                    </b-card>
                </b-col>
            </b-row>
            <br><br>
        </b-container>
    </b-container>
</div>
</template>

<style>
.custom-conteiner1{
    padding-right: 0px !important;
    padding-left: 0px !important;
}
.custom-conteiner2{
    padding-right: 0px !important;
    padding-left: 0px !important;
    background-color: #2467C2;
}
.custom-conteiner3{
    padding-right: 0px !important;
    padding-left: 0px !important;
    background-color: #1F50AA;
}
.card-custom{
    background-color: #1F50AA !important;
}
.card-custom1{
    background-color: #1F50AA !important;
}
.card-custom2{
    background-color: #2467C2 !important;
}
.card-custom3{
    background-color: #1F50AA !important;
}
.bg-image-url {
    background-image: url('../source/sea-86425_1920.jpg');
    background-position: center;
    background-size: cover;
}
</style>