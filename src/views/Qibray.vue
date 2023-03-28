<template>
    <div class="container">
           <div class="vrach">
        <div class="vrach__info">
            <div class="vrach__info-name">
            <p class="vrach__info-name-text">Директор: </p>
        <h1>Мирюнусов Мирносир Мухлисович</h1>
        </div>
        <div class="vrach__info-img">
            <img src="../assets/imgs/cadr10.png" alt="">
        </div>
        </div>
        <p>Клинический санаторий “Кибрай” расположен в Кибрайском районе Ташкентской области.</p>
    <p>В санатории оказывается медицинская помощь прикрепленному контингенту высококвалифицированными специалистами. Все врачи ежегодно повышают квалификацию в ведущих клиниках Узбекистана.</p>
    <p>Постоянно ведется совместная работа с эпидемиологами по профилактике инфекционных заболеваний и соблюдению санэпидрежима. </p>
    <h3>Основные направления деятельности санатория:</h3>
    <ul>
        <li>1. Лечебно-профилактическая работа: лечение кардиологических, неврологических заболеваний, эндокринных заболеваний, заболеваний лёгких. Медикаментозное лечение, водные процедуры, электропроцедуры, магнитотерапия, лазеротерапия, озокерит, грязелечение, массаж, лечебная физкультура.</li>
        <li>2. Реабилитация больных, перенесших острый инфаркт миокарда, острое нарушение мозгового кровообращения. Индивидуальные занятия лечебной физкультурой, дозированная ходьба, массаж с восстановлением движений в конечностях.</li>
        <li>3. Оздоровление прикреплённого контингента медикаментозное и физиотерапевтическое лечение.</li>
    </ul>
    <h3> В санатории развернута работа 4-х отделений:</h3>
 <ul>
        <li>1. Кардиология</li>
        <li>2. Неврология</li>
        <li>3. Реабилитация;</li>
        <li>велоэргометрия;</li>
        <li>4. Физиотерапия</li>
    </ul>
    <p>Контактные телефоны: <a href="tel:+ 998-71-286-02-00"> + 998-71-286-02-00;     +998-71-286-01-46;</a> </p>
    <p>Электронная почта: <a href="mailto:san.kibray@apgmu.uz"> san.kibray@apgmu.uz, klinikkibray@mail.ru</a> </p>
    <h4 class="vrach__title">Клиническая санатория «КИБРАЙ»</h4>
    <h5 class="vrach-title">Бальнео-физиотерапевтическое отделение</h5>
    <h5 class="vrach-title">Кардиологическое отделение</h5>
    <h5 class="vrach-title">Клинико- диагностическая лаборатория</h5>
    <h5 class="vrach-title">Отделение восстановительного лечения</h5>
    <h5 class="vrach-title">Неврологическое отделение</h5>  
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .vrach{
        &-title{
            text-align: center;
            font-size: 18px;
        }
        &__title{
            text-align: center;
            font-size: 22px;
            margin-top: 50px;
        }
    }
    @media (max-width:550px) {
        .vrach{
        &-title{
            text-align: center;
            font-size: 17px;
        }
        &__title{
            text-align: center;
            font-size: 20px;
            margin-top: 35px;
        }
    }
    }
    @media (max-width:400px) {
        .vrach{
        &-title{
            text-align: center;
            font-size: 16px;
        }
        h3{
            font-size: 18px;
            font-weight: 500;
        }
        &__title{
            text-align: center;
            font-size: 18px;
            margin-top: 25px;
        }
    }
    }
    @media (max-width:350px) {
        .vrach{
            gap: 5px;
        &-title{
            text-align: center;
            font-size: 16px;
            font-weight: 500;
        }
        h3{
            font-size: 16px;
            font-weight: 500;
        }
        &__title{
            text-align: center;
            font-size: 18px;
            margin-top: 15px;
            font-weight: 500;
        }
    }
    }
</style>