<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos farmacotécnicos
    
    p.mb-5 Es importante conocer y recordar algunos términos relacionados con la farmacotecnia, que serán de gran aporte para la comprensión del contenido que se desarrollará durante el componente formativo.
    .h4 Droga
    p.mb-5 Es toda sustancia que, introducida al organismo por cualquier vía de administración, produce una alteración del natural funcionamiento del sistema de la persona, siendo susceptible a crear dependencia psicológica, física o ambas.

    .BGIMG01.px-md-5.px-4.py-4.mb-5
      .row.justify-content-end.align-items-center
        .col-lg-5.img-01.order-lg-1.order-2(data-aos="fade-right")
          .BGRS02.py-5.px-4
            .h4 Materia prima
            p Es toda sustancia activa o inactiva empleada en la fabricación de un medicamento que, en el transcurso del proceso, puede:
            ul.lista-ul--color
              li
                i.fas.fa-atom.fa-spin(style="color: #7E5EE3;")
                | Permanecer inalterada.
              li
                i.fas.fa-atom.fa-spin(style="color: #7E5EE3;")
                | Modificarse.
              li
                i.fas.fa-atom.fa-spin(style="color: #7E5EE3;")
                | Desaparecer en el transcurso del proceso.
            Para el correcto manejo de las materias primas, se deben tener en cuenta aspectos relacionados con su recepción, verificación, control de calidad y almacenamiento, como se detalla a continuación.
        .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img01.jpg' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-8.mb-5
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 1.
          span Manejo materias prima
        figure(data-aos="zoom-in" alt="Figura 1. Muestra la recepción de materias primas y los productos de acondicionamiento, esto es:<br>Cuarentena: situación de materias primas, de productos intermedios a granel o terminados y materiales de acondicionamiento que se encuentren aislados fisicamente o de otra forma mientras se decide su aprobación o rechazo; de esta cuarentena sale un registro con datos del proveedor, lote, control de capacidad, número de envases, etc. y a su vez de la hoja de registro se emite un certificado y etiqueta hacia la cuarentena.")
          img(src="@/assets/curso/tema1/img02.svg" alt="Imagen decorativa")
      .col-lg-8
        .cajon.color-secundario.p-4(data-aos="flip-up")
          p.mb-0 Dicho proceso también es aplicable al material de acondicionamiento utilizado durante el proceso de elaboración de las preparaciones magistrales tópicas no estériles.
    
    .BGIMG02.px-md-5.px-4.py-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          .h4 Principio activo
          p También llamado sustancia activa, es considerado como toda sustancia o mezcla de sustancias, cuyo objetivo es la fabricación de un medicamento y que se transforman en el componente activo de este. Dicho componente tiene como objetivo generar una acción metabólica, farmacológica e inmunológica, restaurando, corrigiendo o modificando las funciones fisiológicas o realizar un diagnóstico.
          p.mb-0 Algunos ejemplos de principios activos de preparaciones magistrales tópicas no estériles son:
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img.w-75(src='@/assets/curso/tema1/img03.png' alt="Imagen decorativa")


    .titulo-sexto.color-acento-botones(data-aos="fade-right")
      h5 Tabla 1.
      span Ejemplos principios activos

    .tabla-a.color-primario.mb-5(data-aos="zoom-in")
      table(alt="Tabla 1. Se muestran los diferentes equipos que se utilizan para la separaci{on de resíduos y los elementos a utilizar.")
        thead(style="border-color: #00BCD4")
          tr
            th(style="background-color: #95DCE5; width: 16.6%; font-size: 18px").text-center Nombre principio activo
            th(style="background-color: #95DCE5; width: 33.3%; font-size: 18px").text-center Indicación
            th(style="background-color: #95DCE5; width: 30%; font-size: 18px").text-center Acción farmacológica
            th(style="background-color: #95DCE5; width: 20%; font-size: 18px").text-center Utilizado en
        tbody
          tr
            th(style="background-color: #FFFFFF;") Sulfato de zinc.
            td(style="background-color: #FFFFFF;") Tratamiento de dermatitis, acné, úlceras indoloras, lupus eritematoso, impétigo y eczema agudo.
            td(style="background-color: #FFFFFF;") Antiséptico débil (1 % de concentración) y astringente (0,5 %).
            td(style="background-color: #FFFFFF;") Soluciones tópicas.
          tr
            th(style="background-color: #F1F1F1;") Sulfato de cobre.
            td(style="background-color: #F1F1F1;") Tratamiento del herpes simple y varicela zóster. Es eficaz para secar las típicas vesículas y para evitar la extensión de la infección viral. Muy útil en impétigo, dermatitis exudativas y costrosas.
            td(style="background-color: #F1F1F1;") Astringente, cáustico, antiséptico, fungicida y secante.
            td(style="background-color: #F1F1F1;") Soluciones tópicas.
          tr
            th(style="background-color: #FFFFFF;") Eosina.
            td(style="background-color: #FFFFFF;") Tratamiento y desinfección de heridas superficiales y quemaduras leves.
            td(style="background-color: #FFFFFF;") Desinfectante cutáneo.
            td(style="background-color: #FFFFFF;") Soluciones tópicas.
          tr
            th(style="background-color: #F1F1F1;") Óxido de zinc.
            td(style="background-color: #F1F1F1;") Quemaduras leves, raspones, sedante del ardor y del prurito en eccemas, eritrodermias, rozadura por pañal. Prevención de maceraciones.
            td(style="background-color: #F1F1F1;") Emoliente protector y astringente cutáneo.
            td(style="background-color: #F1F1F1;") Cremas tópicas.

    .BGIMG03.px-md-5.px-4.py-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          .h4 Excipientes
          p Es una sustancia inactiva utilizada como vehículo para el principio activo. Además, pueden ser utilizados para ayuda en el proceso de manufactura de un medicamento.
          p En general, las sustancias activas no pueden ser absorbidas por sí solas por el cuerpo humano, pues necesitan ser administradas en la forma apropiada, por lo tanto, debe ser disuelta o mezclada con un excipiente llamado vehículo y dependiendo de la forma de administración, pueden ser usados distintos excipientes. 
          p Además, cuando un ingrediente activo ha sido purificado, muchas veces no puede permanecer así por mucho tiempo; otro uso de los excipientes es como estabilizadores que aseguren la activación del principio activo lo suficiente para hacer un producto competitivo.
          p.mb-0 Según el estatus legal, los medicamentos se dividen en:
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img.w-75(src='@/assets/curso/tema1/img04.png' alt="Imagen decorativa")
    
    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4
        img(src='@/assets/curso/tema1/img05.svg' alt="Imagen decorativa")
      .col-lg-9
        TabsA.color-acento-contenido
          .BGRB03.p-4(titulo="Especificidad farmacéutica")
            .h4.text-purple Especificidad farmacéutica
            p.mb-0 Es el medicamento de composición e información definidas, de forma farmacéutica y dosificación determinadas, preparado para su uso medicinal inmediato, dispuesto y acondicionado para su dispensación al público, con denominación coma en coma en base y etiquetado uniformes según lo dispongan las autoridades sanitarias.
          .BGRB03.p-4(titulo="Fórmula magistral")
            .h4.text-purple Fórmula magistral
            p.mb-0 Es el medicamento destinado a un paciente individualizado, preparado por el farmacéutico, o bajo su dirección, para cumplimentar expresamente una prescripción facultativa detallada de las sustancias medicinales que incluye, según las normas técnicas y científicas del arte farmacéutico, dispensado en su farmacia o servicio farmacéutico y con la debida información al usuario.
          .BGRB03.p-4(titulo="Preparado o fórmula oficial")
            .h4.text-purple Preparado o fórmula oficial
            p.mb-0 Es aquel medicamento elaborado y garantizado por un farmacéutico, o bajo su dirección, como de farmacia o servicio farmacéutico, enumerado y descrito por el formulario, destinado a la entrega directa a los enfermeros a los que abastece dicha farmacia o servicio farmacéutico.
          .BGRB03.p-4(titulo="Medicamento prefabricado")
            .h4.text-purple Medicamento prefabricado
            p.mb-0 Es el medicamento que no se ajusta a la definición de especialidad farmacéutica y que se comercializa en una forma farmacéutica que puede utilizarse sin necesidad de tratamiento industrial y al que la autoridad farmacéutica otorgue autorización e inscriba en el registro correspondiente.
          .BGRB03.p-4(titulo="Medicamento en investigación")
            .h4.text-purple Medicamento en investigación
            p.mb-0 Forma farmacéutica de una sustancia activa o placebo, que se investiga o se utiliza como referencia en un ensayo clínico, incluidos los productos con autorización de comercialización cuando se utilicen o combinen, en la formulación o en el envase, de forma diferente a la autorizada o cuando se utilicen para tratar una indicación no autorizada, o para obtener más información sobre un uso autorizado.


    .BGM08.px-md-5.px-4.py-4.mb-5
      .row.justify-content-start.align-items-center
        .col-lg-8.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img06.jpg' alt="Imagen decorativa")
        .col-lg-5.img-02(data-aos="fade-left")
          .BGRS03.py-5.px-4
            .h4 Incompatibilidades preparaciones magistrales
            p Son alteraciones degradativas de un preparado farmacéutico que pueden ser ocasionadas por interacciones entre dos o más componentes. 
            p Antes se relacionaban aquellas alteraciones de los componentes que aparecían en el proceso de fabricación de preparados farmacéuticos, como:
            ul.lista-ul--color
              li
                i.fas.fa-atom.fa-spin(style="color: #7E5EE3;")
                | Licuefacción.
              li
                i.fas.fa-atom.fa-spin(style="color: #7E5EE3;")
                | Alteración del olor, sabor, coloración.
              li
                i.fas.fa-atom.fa-spin(style="color: #7E5EE3;")
                | Desprendimiento de gas.
              li
                i.fas.fa-atom.fa-spin(style="color: #7E5EE3;")
                | Precipitación. 
              li
                i.fas.fa-atom.fa-spin(style="color: #7E5EE3;")
                | Gelificación.

    p.mb-5 Y son consideradas alteraciones no intencionadas que #[strong afectan a la acción] o que impiden que se realice una #[strong dosificación adecuada y exacta], o que influencia el aspecto de manera tan negativa que el preparado farmacéutico debe ser rechazado por razones éticas.
    .cajon.color-secundario.p-4.mb-5(data-aos="flip-up")
      p.mb-0 Si aparece una alteración degradativa al cabo de un tiempo de #[strong almacenamiento] se llama #[strong inestabilidad].
    p.mb-5 Las incompatibilidades se pueden clasificar de la siguiente forma:

    .row.justify-content-center.mb-5
      .col-lg-8.mb-4
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 2.
          span Clasificación de incompatibilidades
        figure(data-aos="fade-right")
          img(src="@/assets/curso/tema1/img07.svg" alt="Figura 2. Muestra la clasificación de incompatibilidades que son las manifiestas y las larvadas que se explican luego de la imagen.")
        figure(data-aos="fade-right")
          img(src="@/assets/curso/tema1/img08.png" alt="Figura 2. Muestra la clasificación de incompatibilidades que son las manifiestas y las larvadas que se explican luego de la imagen.")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img09.svg' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p En la fabricación de las preparaciones magistrales participan componentes como: 
        ul.lista-ul--color
          li
            i.fas.fa-atom.fa-pulse(style="color: #FF9D00;")
            | El o los principios activos.
        ul.lista-ul--color
          li
            i.fas.fa-atom.fa-pulse(style="color: #FF9D00;")
            | Excipientes.
        ul.lista-ul--color
          li
            i.fas.fa-atom.fa-pulse(style="color: #FF9D00;")
            | Envases.
    
    p.mb-5 Y las incompatibilidades se pueden presentar entre estos mismos o sustancias extrañas presentes, de la siguiente forma:
    
    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 3.
          span Incompatibilidades entre componentes de la fórmula
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema1/img10.svg" alt="Figura 3. Muestra las diferentes incompatibilidades que se presentan entre componente de la fórmula.")
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-primario.p-3.p-md-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-2.col-4.mb-4.mb-lg-0(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img11.svg" alt="Imagen decorativa")
            .col-lg-10(data-aos="fade-left")
              .bloque-texto-a__texto.p-4
                p.mb-0 Dichas incompatibilidades se presentan en todas las formas farmacéuticas de las preparaciones magistrales tanto estériles como no estériles.

    .BGIMG01.px-md-5.px-4.py-4.mb-5
      .row.justify-content-center
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
            p Dentro de los factores que pueden generar dichas incompatibilidades, se encuentran: 
            ul.lista-ul--color
              li
                i.fas.fa-atom.fa-pulse(style="color: #FF9D00;")
                | La concentración elevada de los principios activos.
                ul.lista-ul--color
              li
                i.fas.fa-atom.fa-pulse(style="color: #FF9D00;")
                | Cambios en el pH.
                ul.lista-ul--color
              li
                i.fas.fa-atom.fa-pulse(style="color: #FF9D00;")
                | Electrolitos.
                ul.lista-ul--color
              li
                i.fas.fa-atom.fa-pulse(style="color: #FF9D00;")
                | Los conservantes.
                ul.lista-ul--color
              li
                i.fas.fa-atom.fa-pulse(style="color: #FF9D00;")
                | Sustancias tensoactivas.
                ul.lista-ul--color
              li
                i.fas.fa-atom.fa-pulse(style="color: #FF9D00;")
                | Baja solubilidad entre componentes.
                ul.lista-ul--color
              li
                i.fas.fa-atom.fa-pulse(style="color: #FF9D00;")
                | Presencia de contaminantes.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img12.svg' alt="Imagen decorativa")

    p.mb-5 Y dentro de los resultados que pueden traer dichos factores, podemos encontrar los siguientes:

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Tabla 2.
          span Consecuencias factores que generan incompatibilidades

        .tabla-a.color-primario(data-aos="zoom-in")
          table(alt="Tabla 2. Se muestran los diferentes equipos que se utilizan para la separaci{on de resíduos y los elementos a utilizar.")
            thead(style="border-color: #00BCD4")
              tr
                th(style="background-color: #95DCE5; font-size: 18px").text-center Factor
                th(style="background-color: #95DCE5; font-size: 18px").text-center Consecuencia
            tbody
              tr
                td(style="background-color: #FFFFFF;") Concentración elevada de los principios activos.
                td(style="background-color: #FFFFFF;") Saturación de la mezcla, precipitación de los principios activos y alteración de las características organolépticas del producto.
              tr
                td(style="background-color: #F1F1F1;") Cambios de pH.
                td(style="background-color: #F1F1F1;") Se cae la viscosidad del producto.
              tr
                td(style="background-color: #FFFFFF;") Presencia de electrolitos.
                td(style="background-color: #FFFFFF;") Caída de la viscosidad, precipitación.
              tr
                td(style="background-color: #F1F1F1;") Los conservantes.
                td(style="background-color: #F1F1F1;") Reaccionan con algunos componentes de la fórmula y su capacidad conservadora se ve disminuida.
              tr
                td(style="background-color: #FFFFFF;") Sustancias tensoactivas.
                td(style="background-color: #FFFFFF;") Enturbiamiento y coagulación de la mezcla.
              tr
                td(style="background-color: #F1F1F1;") Baja solubilidad entre componentes.
                td(style="background-color: #F1F1F1;") Que no se mezclen entre ellos y generan precipitaciones.
              tr
                td(style="background-color: #FFFFFF;") Presencia de contaminantes.
                td(style="background-color: #FFFFFF;") Reaccionan con componentes de la fórmula y generar cambios en las características organolépticas, además de contaminación del producto.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-6.pe-0.order-1.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img13.jpg' alt="Imagen decorativa")
      .col-lg-4.px-0.order-lg-2.order-3(data-aos="fade-up")
        .BG05.p-5
          .h4 Interacción de los preparados magistrales
          p.mb-0 Todos los preparados farmacéuticos están formados por diferentes componentes y cada uno de ellos tiene una función específica dependiendo de la forma farmacéutica. En general, siempre se cuenta con uno o varios principios activos y excipientes que son inactivos frente a la acción farmacológica del preparado, pero que a su vez cumple con funciones específicas como vehículo, conservantes, proporcionar viscosidad, regular el pH, entre otras.
      .col-lg-4.col-6.ps-0.order-lg-3.order-2.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img14.jpg' alt="Imagen decorativa")
    
    p.mb-5 Estos componentes interactúan entre sí para lograr un producto final que cumpla con las especificaciones definidas. Entre las interacciones que se pueden presentan en estos productos se pueden encontrar las siguientes:

    .row.justify-content-center.mb-5
      .col-lg-8.mb-4
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 4.
          span Interacciones químicas
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema1/img15.svg" alt="Figura 4. describe las interacciones químicas que son el sinergismo y el antagonismo, ambas se explican luego de la figura.")
    
    p.mb-5 Ahora bien, dentro de los tres tipos de sinergismos que se conocen, están los siguientes:

    .BG06.p-4.mb-5(data-aos="zoom-in")
      LineaTiempoC.color-secundario(text-small)
        .row.justify-content-center(titulo="Efecto aditivo")
          .col-lg-5.col-10.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img16.svg" alt="imagen que muestra de manera ilustrativa el resultado de varios productos químicos que actúan juntos.")
          .col-lg-5
            p Es el resultado de dos o más productos químicos que actúan juntos y representan la simple suma de sus efectos cuando actúan independientemente.
            .BG05.p-4.mb-4
              p.mb-0 Producen el mismo efecto por igual mecanismos de 
            p.mb-0 #[strong Ejemplo]: organofosforados y carbamatos.
        .row.justify-content-center(titulo="Potenciación (multiplicador)")
          .col-lg-5.col-10.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img17.svg" alt="Imagen que muestra el resultado de dos productos químicos que actúan juntos.")
          .col-lg-5
            p Es el efecto de dos productos químicos que actúan juntos, cuyo resultado es mayor que la suma sencilla de sus efectos al actuar solos.
            .BG05.p-4
              p.mb-0 Ambos compuestos son tóxicos. 
        .row.justify-content-center(titulo="Facilitación")
          .col-lg-5.col-10.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img18.svg" alt="Imagen que muestra la combinación de una sustancia que no es dañina con otra.")
          .col-lg-5
            p Es cuando una sustancia que no produce daño, al combinarse con otra sustancia aumenta los efetos de esta.
            .BG05.p-4
              p.mb-0 Uno de los compuestos no es tóxico.

    p Y dentro de los 4 tipos de sinergismos que se conocen, están los siguientes:

    LineaTiempoB.color-secundario(:datos="datosLineaTiempo" data-aos="zoom-in")
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosLineaTiempo: [
      {
        titulo: 'Bioquímico',
        texto:
          'Uno de los compuestos altera la disposición del otro: <br><i class="fas fa-arrow-circle-down" style="color: #FF9D00;"></i> Absorción.<br><i class="fas fa-arrow-circle-down" style="color: #FF9D00;"></i> Distribución.<br><i class="fas fa-arrow-circle-up" style="color: #FF9D00;"></i> Biotransformación.<br><i class="fas fa-arrow-circle-up" style="color: #FF9D00;"></i> Excreción.',
        icono: require('@/assets/curso/tema1/img20.svg'),
      },
      {
        titulo: 'Químico',
        texto:
          'Los dos compuestos reaccionan químicamente para formar un producto que es inactivo desde el punto de visto toxicológico.<br><b>Ejemplo</b>: EDTA + plomo.',
        icono: require('@/assets/curso/tema1/img21.svg'),
      },
      {
        titulo: 'A nivel del receptor',
        texto:
          'Los dos compuestos interaccionan con el mismo receptor o sistema receptor efector.<br><i class="fas fa-atom fa-pulse" style="color: #FF9D00"></i> Competitivo.<br><i class="fas fa-atom fa-pulse" style="color: #FF9D00"></i> No competitivo.',
        icono: require('@/assets/curso/tema1/img22.svg'),
      },
      {
        titulo: 'Fisiológico',
        texto:
          'Interaccionan dos sustancias que actúan en receptores diferentes produciendo efectos opuestos.',
        icono: require('@/assets/curso/tema1/img19.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
