<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/EvCtbrFspJY?si=uwPEdFxtusPwSHa_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .BG01.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/intro/img01.jpg')
        .col-lg-7.order-lg-1.order-2(data-aos="fade-left")
          p La farmacotecnia es una ciencia que estudia las distintas transformaciones a las que deben ser sometidas las materias primas para darles una forma farmacéutica que facilite su administración a los seres vivos, según una prescripción generada por un médico, veterinario u odontólogo o por el resultado de investigaciones clínicas.
          p Actualmente se le conoce como tecnología farmacéutica debido a que no solo abarca la farmacología, sino también los procesos de fabricación de suplementos dietarios, cosméticos, medicamentos y diferentes formas farmacéuticas, como: semisólidas (cremas, ungüentos, geles, etc.), sólidas, en polvo y líquidas.
          p.mb-0 Con el fin de lograr una correcta dispensación al usuario, junto con los elementos anteriormente nombrados, se deben tener en cuenta:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        ul.lista-ul--color
          li
            i.fas.fa-atom(style="color: #FF9D00;")
            | Los equipos y maquinaria en correcto estado y calibradas.
          li
            i.fas.fa-atom(style="color: #FF9D00;")
            | Formulaciones estandarizadas.
          li
            i.fas.fa-atom(style="color: #FF9D00;")
            | Áreas adecuadas.
          li
            i.fas.fa-atom(style="color: #FF9D00;")
            | Personal competente.
          li
            i.fas.fa-atom(style="color: #FF9D00;")
            | Controles de calidad que evidencien el cumplimiento con las especificaciones definidas.
        p El proceso productivo relacionado con las preparaciones magistrales tópicas no estériles está ligado a unas etapas y secuencias que deben ser cumplidas en el marco de las BPE (Buenas Prácticas de Elaboración) y que garantizan que el producto final dispensado el usuario cumpla con las características técnicas y así logre el objetivo terapéutico.
        p.mb-0 En este componente formativo se hará un recorrido por todas las áreas y etapas del proceso productivo de las preparaciones magistrales tópicas no estériles, desde la de recepción, almacenamiento, paquete técnico de producción (Batch Record): orden de producción, despeje de línea inicial, procedimiento de elaboración, producto en proceso, despeje de línea final, lista de chequeo de proceso de llenado hasta la limpieza de equipos.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/intro/img02.svg')
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
