<template>
 <div class="malumot">
        <div class="malumot__nav">
            <h1>О нас</h1>

        </div>
       <div class="container">
         <div class="malumot__main">
            <p class="malumot__main-textone">Главное медицинское управление при Администрации Президента Республики Узбекистан является самостоятельным структурным подразделением Администрации Президента Республики Узбекистан, осуществляющее высоко-квалифицированную диагностическую, лечебно-профилактическую, педиатрическую, санаторно-курортную помощь, проведение медицинских экспертиз, организацию медицинской и фармацевтической помощи, а также обеспечивающее санитарно-эпидемиологическое благополучие прикрепленного контингента, определяемого в установленном законодательством порядке.
<br>
                <span>Главное управление включает в себя медицинские, санитарно-эпидемиологические, аптечные, санаторно-курортные организации и другие вспомогательные учреждения (Управление по обеспечению специализированным транспортом, управление по развитию материально технической базы, КО АО «Узбекистон») при Администрации Президента Республики Узбекистан.</span>
</p>
            <p class="malumot__main-texttwo"><span>Основными задачами Главного управления являются:</span></p>
            <p class="malumot__main-texttwo">организация и обеспечение гарантированного и качественного медицинского и санаторно-оздоровительного обслуживания прикрепленного контингента, включая органов исполнительной власти на местах;</p>
            <p class="malumot__main-texttwo">проведение организационно-методической работы, а также координацию и контроль деятельности подведомственных организаций Главного медицинского управления;</p>
            <p class="malumot__main-texttwo">оказания всех видов медицинской и медико-социальной помощи на основе системного анализа проблем и недостатков, внедрения передового международного опыта в сфере профилактики, диагностики и лечения заболеваний, достижений науки и техники, в том числе современных информационно-коммуникационных технологий и возможностей телемедицины;</p>
            <p class="malumot__main-texttwo">организация и совершенствование педиатрической помощи, прикрепленному детскому контингенту;</p>
            <p class="malumot__main-texttwo">организация и координация деятельности АО«Узбекистон»;</p>
            <p class="malumot__main-texttwo">привлечение высококвалифицированных специалистов республиканских специализированных научно-практических медицинских центров, отдельных республиканских лечебно-профилактических учреждений и научно-исследовательских институтов, в том числе профильных зарубежных медицинских организаций для проведения совместных консультаций, консилиумов и сложных оперативных вмешательств и т.д.</p>
<p class="malumot__main-textthre">1. Центральная консультативно-диагностическая поликлиника №1 (ЦКДП №1);</p>
<p class="malumot__main-textthre">2. Центральная консультативно-диагностическая поликлиника №2 (ЦКДП №2);</p>
<p class="malumot__main-textthre">3. Центральная клиническая больница №1  (ЦКБ №1);</p>
<p class="malumot__main-textthre">4. Центральная клиническая больница № 2 (ЦКБ №2);</p>
<p class="malumot__main-textthre">5. Клиническая санаторий “Кибрай”;</p>
<p class="malumot__main-textthre">6. Управление санитарно-эпидемиологического надзора (УСЭН)</p>
<p class="malumot__main-textthre">7. Управление по развитию материально-технической базы (УРМТБ);</p>
<p class="malumot__main-textthre">8. Центральная аптека;</p>
<p class="malumot__main-textthre">9. Управление по обеспечению специализированным автотранспортом (УОСА);</p>
<p class="malumot__main-textthre">10. Курортно - оздоровительное АО «Узбекистан».</p>
        </div>
       </div>
    </div> 
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .malumot{
        margin-bottom: 30px;
        margin-top: 50px;
        &__nav{
            background: aqua;
            border-radius: 10px;
            width: 100%;
            height: 100px;
            display: flex;
            flex-direction: column;
            padding:  30px;
            h1{
                text-align: center;
                box-shadow: 0 15px 10px 0 grey;
                border-radius: 10px;
            }
        }
        &__main{
            padding: 0 30px;
            margin-top: 50px;
            &-textone{
                margin-bottom: 30px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                font-size: 18px;
                text-align: justify;
                color: midnightblue;
                
            }
            &-texttwo{
                text-align: justify;
                color: midnightblue;
                display: flex;
                flex-direction: column;
                margin-top: 10px;
                gap: 10px;
                font-size: 18px;
                span{
                    font-size: 20px;
                    color: black;
                    font-weight: 600;
                }
            }
            &-textthre{
               text-align: justify;
                color: midnightblue;
                display: flex;
                flex-direction: column;
                margin-top: 10px;
                font-size: 18px;
                font-weight: 600; 
            }
        }
    }
    @media (max-width:700px) {
        .malumot{
            &__nav{
               h1{
                font-size: 28px;
               } 
            }
        }
    }
    @media (max-width:500px) {
        .malumot{
            &__nav{
                height: 80px;
               h1{
                font-size: 25px;
               } 
            }
            &__main{
                margin-top: 20px;
                &-textone{
                    font-size: 16px;
                }
                &-texttwo{
                    font-size: 17px;
                    span{
                        font-size: 18px;
                    }
                }
                &-textthre{
                    font-size: 16px;
                }
            }
        }
    }
    @media (max-width:400px) {
        .malumot{
            &__nav{
                padding: 15px;
                height: 60px;
               h1{
                font-size: 22px;
               } 
            }
            &__main{
                margin-top: 30px;
                &-textone{
                    font-size: 16px;
                    text-align: start;
                }
                &-texttwo{
                    font-size: 16px;
                    text-align: start;
                    span{
                        font-size: 17px;
                    }
                }
                &-textthre{
                    font-size: 15px;
                    text-align: start;
                }
            }
        }
    }
</style>