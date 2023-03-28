<template>
      <div class="home">
      <video autoplay muted src="../assets/video/prizidentadmin.mp4"></video>
    </div> 
    <div class="container">
         <div class="info">
            <h1 class="info-title">Об управлении</h1>
            <p class="info-text"><span>Главное медицинское управление при Администрации Президента Республики
                    Узбекистан</span> является самостоятельным структурным подразделением Администрации Президента
                Республики Узбекистан, осуществляющее высоко-квалифицированную диагностическую, лечебно-профилактическую,
                педиатрическую, санаторно-курортную помощь, проведение медицинских экспертиз, организацию медицинской и
                фармацевтической помощи, а также обеспечивающее санитарно-эпидемиологическое благополучие прикрепленного
                контингента, определяемого в установленном законодательством порядке.
                Главное управление включает в себя медицинские, санитарно-эпидемиологические, аптечные, санаторно-курортные
                организации и другие вспомогательные учреждения (Управление по обеспечению специализированным транспортом,
                управление по развитию материально технической базы, КО АО «Узбекистон») при Администрации Президента
                Республики Узбекистан.</p>
            <p class="info-text"><span>Основными задачами Главного управления являются:</span>
                <br>
                организация и обеспечение гарантированного и качественного медицинского и санаторно оздоровительного
                обслуживания прикрепленного контингента, включая органов исполнительной власти на местах;
                проведение организационно-методической работы, а также координацию и контроль деятельности подведомственных
                организаций Главного медицинского управления;
                оказания всех видов медицинской и медико-социальной помощи на основе системного анализа проблем и
                недостатков, внедрения передового международного опыта в сфере профилактики, диагностики и лечения
                заболеваний, достижений науки и техники, в том числе современных информационно-коммуникационных технологий и
                возможностей телемедицины;
                организация и совершенствование педиатрической помощи, прикрепленному детскому контингенту;
                организация и координация деятельности АО«Узбекистон»;
                привлечение высококвалифицированных специалистов республиканских специализированных научно-практических
                медицинских центров, отдельных республиканских лечебно-профилактических учреждений и
                научно-исследовательских институтов, в том числе профильных зарубежных медицинских организаций для
                проведения совместных консультаций, консилиумов и сложных оперативных вмешательств и т.д.
                Подведомственные организации Главного медицинского управления при Администрации Президента Республики
                Узбекистан :
            </p>
            <p class="info-text">Центральная консультативно-диагностическая поликлиника №1 (ЦКДП №1);
                Центральная консультативно-диагностическая поликлиника №2 (ЦКДП №2);
                Центральная клиническая больница №1 (ЦКБ №1);
                Центральная клиническая больница № 2 (ЦКБ №2);
                Клиническая санаторий “Кибрай”;
                Управление санитарно-эпидемиологического надзора (УСЭН);
                Управление по развитию материально-технической базы (УРМТБ);
                Центральная аптека;
                Управление по обеспечению специализированным автотранспортом (УОСА);
                Курортно-оздоровительное АО «Узбекистан».</p>
        </div> 
         <div class="region">
            <h1 class="region__title">Региональные учреждения</h1>
            <div class="about__left-nav">
                <button @click="cnopca = !cnopca">
                    <img v-if="cnopca" src="../assets/imgs/list.svg" alt="">
                    <img v-else src="../assets/imgs/grid.svg" alt="">
                    <span v-if="cnopca">Ro'yxat</span>
                    <span v-else>Setka</span>
                </button>
            </div>
            <div class="region__cards" :class="{ setka: cnopca, list: !cnopca }">
                <div class="region__cards-card">
                    <img src="../assets/imgs/card1.jpg" alt="">
                    <div class="region__cards-card-info">
                        <h2>ЦКДП <span>№1</span></h2>
                        <div class="region__cards-card-info-number">
                            <img src="../assets/imgs/phone.svg" alt="">
                            <div class="region__cards-card-info-number-link">
                                <a href="tel:+998-71-233-57-04">
                                    +998-71-233-57-04
                                </a>
                                <a href="tel:+998-71-236-08-84">
                                    +998-71-236-08-84
                                </a>
                                <a href="+998-71-233-19-03">
                                    +998-71-233-19-03
                                </a>
                            </div>
                        </div>
                        <p class="region__cards-card-info-text">
                            <img src="../assets/imgs/locatsia.svg" alt="">
                            г. Ташкент, ул. С.Азимова, 67
                        </p>


                    </div>
                </div>
                <div class="region__cards-card">
                    <img src="../assets/imgs/card2.jpg" alt="">
                    <div class="region__cards-card-info">
                        <h2>ЦКДП <span>№2</span></h2>
                        <div class="region__cards-card-info-number">
                            <img src="../assets/imgs/phone.svg" alt="">
                            <div class="region__cards-card-info-number-link">
                                <a href="tel:+998-71-237-15-34">
                                    +998-71-237-15-34
                                </a>
                                <a href="tel:+998-71-237-16-00">
                                    +998-71-237-16-00
                                </a>
                            </div>
                        </div>
                        <p class="region__cards-card-info-text">
                            <img src="../assets/imgs/locatsia.svg" alt="">
                            г.Ташкент, улица Ниязбек йули, 6-проезд, дом №3
                        </p>


                    </div>
                </div>
                <div class="region__cards-card">
                    <img src="../assets/imgs/card3.jpg" alt="">
                    <div class="region__cards-card-info">
                        <h2>ЦКБ <span>№1</span></h2>
                        <div class="region__cards-card-info-number">
                            <img src="../assets/imgs/phone.svg" alt="">
                            <div class="region__cards-card-info-number-link">
                                <a href="tel:+998-71-264-05-11">
                                    +998-71-264-05-11
                                </a>
                                <a href="tel:+998-71-264-81-05">
                                    +998-71-264-81-05
                                </a>
                            </div>
                        </div>
                        <p class="region__cards-card-info-text">
                            <img src="../assets/imgs/locatsia.svg" alt="">
                            г.Ташкент, Мирзо-Улугбекский район, улица Мохларойим, 40
                        </p>


                    </div>
                </div>
                <div class="region__cards-card">
                    <img src="../assets/imgs/card4.jpg" alt="">
                    <div class="region__cards-card-info">
                        <h2>ЦКДП <span>№2</span></h2>
                        <div class="region__cards-card-info-number">
                            <img src="../assets/imgs/phone.svg" alt="">
                            <div class="region__cards-card-info-number-link">
                                <a href="tel:+998-71-267-21-75">
                                    +998-71-267-21-75
                                </a>
                                <a href="tel:+998-71-268-77-32">
                                    +998-71-268-77-32
                                </a>
                            </div>
                        </div>
                        <p class="region__cards-card-info-text">
                            <img src="../assets/imgs/locatsia.svg" alt="">
                            г. Ташкент, Мирзо-Улугбекский район, улица Ашхабадская, 3
                        </p>


                    </div>
                </div>
                <div class="region__cards-card">
                    <img src="../assets/imgs/card5.jpg" alt="">
                    <div class="region__cards-card-info">
                        <h2>Клинический санаторий “Кибрай”</h2>
                        <div class="region__cards-card-info-number">
                            <img src="../assets/imgs/phone.svg" alt="">
                            <div class="region__cards-card-info-number-link">
                                <a href="tel:+998-71-286-02-00">
                                    +998-71-286-02-00
                                </a>
                                <a href="tel:+998-71-286-01-46">
                                    +998-71-286-01-46
                                </a>
                            </div>
                        </div>
                        <p class="region__cards-card-info-text">
                            <img src="../assets/imgs/locatsia.svg" alt="">
                            Кибрайский район, Ташкентская область
                        </p>


                    </div>
                </div>
                <div class="region__cards-card">
                    <img src="../assets/imgs/card6.jpg" alt="">
                    <div class="region__cards-card-info">
                        <h2>Управление санитарно-эпидемиологического надзора</h2>
                        <div class="region__cards-card-info-number">
                            <img src="../assets/imgs/phone.svg" alt="">
                            <div class="region__cards-card-info-number-link">
                                <a href="tel:+998-71-233-48-48">
                                    +998-71-233-48-48
                                </a>
                            </div>
                        </div>
                        <p class="region__cards-card-info-text">
                            <img src="../assets/imgs/locatsia.svg" alt="">
                            г.Ташкент, Яшнабадский район, ул. С.Азимова-65
                        </p>


                    </div>
                </div>
                <div class="region__cards-card">
                    <img src="../assets/imgs/card7.jpg" alt="">
                    <div class="region__cards-card-info">
                        <h2>Центральная аптека</h2>
                        <div class="region__cards-card-info-number">
                            <img src="../assets/imgs/phone.svg" alt="">
                            <div class="region__cards-card-info-number-link">
                                <a href="tel:+998-71-233-19-73">
                                    +998-71-233-19-73
                                </a>
                                <a href="tel:+998-71-236-07-23">
                                    +998-71-236-07-23
                                </a>
                            </div>
                        </div>
                        <p class="region__cards-card-info-text">
                            <img src="../assets/imgs/locatsia.svg" alt="">
                            г.Ташкент, Яшнабадский район, улица С.Азимова, 67
                        </p>


                    </div>
                </div>
                <div class="region__cards-card">
                    <img src="../assets/imgs/card8.png" alt="">
                    <div class="region__cards-card-info">
                        <h2>Управление по обеспечению специализированным автотранспортом</h2>
                        <div class="region__cards-card-info-number">
                            <img src="../assets/imgs/phone.svg" alt="">
                            <div class="region__cards-card-info-number-link">
                                <a href="tel:+998-71-264-17-73">
                                    +998-71-264-17-73
                                </a>
                                <a href="tel:264-17-75">
                                    264-17-75 (диспетчер)
                                </a>
                            </div>
                        </div>
                        <p class="region__cards-card-info-text">
                            <img src="../assets/imgs/locatsia.svg" alt="">
                            г.Ташкент, Мирзо-Улугбекский район,ул.Буюк Ипак йули, 417
                        </p>


                    </div>
                </div>
                <div class="region__cards-card">
                    <img src="../assets/imgs/card9.png" alt="">
                    <div class="region__cards-card-info">
                        <h2>Управление по развитию материально-технической базы</h2>
                        <div class="region__cards-card-info-number">
                            <img src="../assets/imgs/phone.svg" alt="">
                            <div class="region__cards-card-info-number-link">
                                <a href="tel:+998-71-233-02-35">
                                    +998-71-233-02-35
                                </a>
                            </div>
                        </div>
                        <p class="region__cards-card-info-text">
                            <img src="../assets/imgs/locatsia.svg" alt="">
                            г. Ташкент, Яшнабадский район, ул. С.Азимова – 65
                        </p>


                    </div>
                </div>
                <div class="region__cards-card">
                    <img src="../assets/imgs/card10.jpg" alt="">
                    <div class="region__cards-card-info">
                        <h2>АО Узбекистан</h2>
                        <div class="region__cards-card-info-number">
                            <img src="../assets/imgs/phone.svg" alt="">
                            <div class="region__cards-card-info-number-link">
                                <a href="tel:+998-71-236-08-11">
                                    +998-71-236-08-11
                                </a>
                            </div>
                        </div>
                        <p class="region__cards-card-info-text">
                            <img src="../assets/imgs/locatsia.svg" alt="">
                            г. Ташкент, Яшнабадский район, ул. С.Азимова – 63
                        </p>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cnopca: false
        }
    },
};
</script>
<style lang="scss">
#myVideo {
    right: 0;
    top: 100px;
    height: 200px;
}
.home {
    width: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
    video{
        width: 100%;
        max-height: 650px;
        height: 100%;
        object-fit: fill;
        object-position: center;
        display: block;
        z-index: -1;
    }
    &::after {
        content: "";
        background-color: rgba(5, 5, 5, 0.582);
        width: 100%;
        max-height: 650px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;

    }

    &__burger,
    &__close {
        display: none;

        img {
            max-width: 30px;
            width: 100%;

        }
    }

    &__burger {
        img {
            margin-top: 30px;
        }
    }

    &__nav {
        margin-top: 30px;
        background: darkblue;
        width: 100%;
        height: 80px;

        &-list {
            display: flex;
            justify-content: space-between;
            padding: 30px 0;
            max-width: 1640px;
            width: 100%;

            &-li {
                color: white;
                font-weight: 700;
                font-size: 18px;
                transition: 0.7s;
                cursor: pointer;

                &:hover {
                    color: red;
                }
            }
        }
    }

    &__main {
        position: absolute;
        left: 5%;
        top: 45%;

        &-title {
            color: black;
            font-size: 40px;
        }

        &-text {
            color: black;
            font-size: 30px;
            font-weight: 700;


        }

        &-btns {
            display: flex;
            gap: 15px;
            align-items: center;
            justify-content: center;
            margin-top: 30px;

            &-btn {
                color: black;
                background: white;
                font-size: 20px;
                font-weight: 600;
                border: 3px solid black;
                padding: 10px 40px;
                border-radius: 10px 20px;
                transition: 0.5s;

                &:hover {
                    color: white;
                    background: black;
                    border-radius: 20px 10px;
                    border: 3px solid white;
                }

            }
        }
    }
}

.region {
    margin: 50px 0;

    &__title {
        margin-bottom: 30px;
        font-size: 35px;
        font-family: 'Courier New', Courier, monospace;
        text-shadow: 0 8px 2px grey;
        background: white;
        width: max-content;
        padding: 5px 15px;
        border-radius: 10px;
    }

    &__cards {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        margin-top: 30px;

        &-card {
            display: flex;
            align-items: center;
            gap: 30px;
            max-width: 1500px;
            width: 100%;
            height: 100%;
            margin-left: auto;
            margin-right: auto;
            background: white;
            padding: 10px;
            border-radius: 10px;


            &:hover {
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.44);
                transform: scale(0.95);
                transition: 0.5s;
            }

            img {
                max-width: 250px;
                width: 100%;
                max-height: 150px;
                height: 100%;
                border-radius: 5px;
            }

            &-info {
                display: flex;
                flex-direction: column;
                gap: 10px;

                h2 {
                    font-size: 20px;
                    color: indigo;
                    max-width: 500px;
                    width: 100%;
                    
                    span {
                        color: red;
                        font-family: serif;
                        
                    }
                }

                &-text {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 18px;
                    font-family: Verdana, Geneva, sans-serif;
                    font-weight: 600;
                    max-width: 500px;
                    width: 100%;

                    img {
                        width: 30px;
                        height: 30px;
                    }
                }

                &-number {
                    display: flex;
                    align-items: center;
                    gap: 20px;

                    img {
                        width: 30px;
                        height: 30px;
                    }

                    &-link {
                        display: flex;
                        flex-direction: column;

                        a {
                            color: slategray;
                            font-size: 20px;
                            font-weight: 600;
                        }
                    }
                }
            }
        }
    }
}

.info {
    margin: 50px 0;

    &-title {
        color: darkslategrey;
        background-color: rgb(212, 207, 207);
        box-shadow: 0 0 10px 0 grey;
        border-radius: 10px;
        width: 250px;
        text-align: center;
    }

    &-text {
        font-size: 18px;
        text-align: justify;
        width: 80%;
        margin-left: auto;
        margin-top: 30px;
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 5px 0 0 grey;

        span {
            font-weight: 700;
            font-size: 20px;
        }
    }
}

@media (max-width:1150px) {
    .home {
        &__nav {
            &-list {
                &-li {
                    font-size: 17px;
                }
            }
        }
    }
}

@media (max-width:1080px) {
    .home {
        &__nav {
            &-list {
                &-li {
                    font-size: 17px;
                    font-weight: 500;
                }
            }
        }
    }
}

@media (max-width:1000px) {
    .home {

        &__burger,
        &__close {
            display: block;
        }

        &__close {
            position: absolute;
            right: 30px;
            top: 30px;
        }

        &__nav {
            margin-top: 100px;

            &-list {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
                position: fixed;
                align-items: center;
                background-color: black;
                left: 0;
                bottom: -100%;
                transition: 0.5s;

                &.active {
                    bottom: 0;
                }

                &-li {
                    font-size: 17px;
                    font-weight: 500;
                }
            }
        }
    }

    .info {
        &-title {
            font-size: 28px;
        }
    }
}

@media (max-width:800px) {
    .region {
        &__title {
            font-size: 30px;
        }

        &__cards {
            &-card {
                &-info {
                    h2 {
                        font-size: 18px;
                    }

                    &-text {
                        font-size: 16px;
                        text-align: center;
                    }

                    &-number {
                        a {
                            font-size: 18px;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width:700px) {
    .info {
        &-title {
            font-size: 25px;
            margin-left: auto;
            margin-right: auto;

        }

        &-text {
            margin-left: auto;
            margin-right: auto;
            text-align: start;
            width: 100%;
        }
    }
}

@media (max-width:650px) {
    .region {
        &__title {
            font-size: 25px;
        }

        &__cards {
            &-card {
                &-info {
                    h2 {
                        font-size: 17px;
                        max-width: 300px;
                        width: 100%;
                        text-align: center;
                    }

                    &-text {
                        font-size: 15px;
                        text-align: center;

                        img {
                            width: 20px;
                            height: 20px;
                        }
                    }

                    &-number {
                        a {
                            font-size: 16px;
                        }

                        img {
                            width: 20px;
                            height: 20px;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width:600px) {
    .region {
        &__title {
            font-size: 25px;
        }

        &__cards {
            margin-left: auto;
                margin-right: auto;
            &-card {
                flex-direction: column;
                align-items: center;
                

                &-info {
                    h2 {
                        font-size: 17px;
                        max-width: 300px;
                        width: 100%;
                        text-align: center;
                        margin-left: auto;
                        margin-right: auto;
                    }

                    &-text {
                        font-size: 15px;
                        text-align: center;

                        img {
                            width: 20px;
                            height: 20px;
                        }
                    }

                    &-number {
                        margin-left: auto;
                        margin-right: auto;

                        a {
                            font-size: 16px;

                        }

                        img {
                            width: 20px;
                            height: 20px;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width:500px) {
    .info {
        &-title {
            font-size: 20px;
            margin-left: auto;
            margin-right: auto;

        }

        &-text {
            margin-left: auto;
            margin-right: auto;
            text-align: start;
            font-size: 16px;

            span {
                font-size: 18px;
            }
        }
    }
    .region{
        &__cards {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 20px;
            &-card{
                gap: 10px;
                margin: 0;
            }
        }
    }
}

@media (max-width:400px) {
    .region {
        &__title {
            font-size: 20px;
        }

    }
}

@media (max-width:350px) {
    .info {
        &-title {
            font-size: 18px;
            margin-left: auto;
            margin-right: auto;
            width: 200px;
        }

        &-text {
            margin-left: auto;
            margin-right: auto;
            text-align: start;
            font-size: 15px;

            span {
                font-size: 15px;
            }
        }
    }
    .region{
        &__title{
            font-size: 18px;
            font-family: monospace;
            padding: 0 7px 3px 7px;
            
        }
    }
}</style>
