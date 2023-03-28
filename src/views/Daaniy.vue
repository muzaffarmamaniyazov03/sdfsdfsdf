<template>
   <div class="container">
    <div class="danniy">
    <h1>ОТКРЫТЫЕ ДАННЫЕ</h1>
    <ul class="danniy-list">
        <li><a href="@/assets/pdf/danniy1.xls"  downloadclass="danniy-list-link">Бюджет 2020-2021 гг <span>PDF</span></a></li>
        <li><a href="../assets/pdf/danniy2.xls" download class="danniy-list-link">Отчет АО Узбекистан-2021 <span>PDF</span></a></li>
        <li><a href="../assets/pdf/danniy3.xls" download class="danniy-list-link">Дори-дармон СВОД 2017-2021 (2) <span>PDF</span></a></li>
        <li><a href="../assets/pdf/danniy4.xls" download class="danniy-list-link">УРМТБ-2019-2021 хисобот (выжимка) <span>PDF</span></a></li>
        <li><a href="../assets/pdf/danniy5.xlsx" download class="danniy-list-link">ИТОГИ 2021г-кадр (4) <span>PDF</span></a></li>
        <li><a href="../assets/pdf/danniy6.xlsx" download class="danniy-list-link">ИТОГи 2021 Автобаза (вижимка) <span>PDF</span></a></li>
        <li><a href="../assets/pdf/danniy7.xlsx" download class="danniy-list-link">Внебюджет-Бюджет 2020-2021 <span>PDF</span></a></li>
        <li><a href="../assets/pdf/danniy8.xlsx" download class="danniy-list-link">2022 йил 2 чорак бюджет ижроси <span>PDF</span></a></li>
        <li><a href="../assets/pdf/danniy9.xls" download class="danniy-list-link">2022 йил 1 чорак бюджет ижроси <span>PDF</span></a></li>
        <li><a href="../assets/pdf/danniy10.xlsx" download class="danniy-list-link">2022 йил Бюджет таксимоти <span>PDF</span></a></li>
        <li><a href="../assets/pdf/danniy11.xlsx" download class="danniy-list-link">2021 йил 6-илова <span>PDF</span></a></li>
        <li><a href="../assets/pdf/danniy12.rtf" download class="danniy-list-link">2021 копия йил №-илова <span>PDF</span></a></li>
        <li><a href="../assets/pdf/danniy13.rtf" download class="danniy-list-link">2022 й 5% қариздорлик 2,2 илова <span>PDF</span></a></li>
    </ul>
   </div>
   </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">

    .danniy{
        background: whitesmoke;
        padding: 20px;
        margin-bottom: 30px;
        border-radius: 5px;
        margin-top: 100px;
        h1{
            color: slategrey;
        }
        &-list{
            display: flex;
            gap: 10px;
            flex-direction: column;
            margin-top: 20px;
            &-link{
                color: black;
                border-radius: 5px;
                border: 1px solid black;
                padding: 10px 20px;
                font-size: 18px;
                font-weight: 600;
                display: flex;
                justify-content: space-between;
                span{
                    font-weight: 600;
                    color: white;
                    background: black;
                    padding: 0 8px;
                    margin-left: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                & link.router-link-exact-active{
    color: red;
    border-bottom: 2px solid red;
    box-shadow: 0 0 2px 0  rgb(31, 19, 19);
}
            }
        }
    }
    @media (max-width:1000px) {
        .danniy{
            h1{
                font-size: 28px;
            }
        }
    }
    @media (max-width:750px) {
        .danniy{
            h1{
                font-size: 25px;
            }
            &-list{
                &-link{
                    font-size: 17px;
                    span{
                        font-size: 16px;
                    }
                }
            }
        }
    }
    @media (max-width:600px) {
        .danniy{
            h1{
                font-size: 22px;
            }
            &-list{
                &-link{
                    font-size: 16px;
                    span{
                        font-size: 15px;
                    }
                }
            }
        }
    }
    @media (max-width:470px) {
        .danniy{
            h1{
                font-size: 20px;
            }
            &-list{
                &-link{
                    font-size: 15px;
                    span{
                        font-size: 15px;
                    }
                }
            }
        }
    }
    @media (max-width:450px) {
        .danniy{
            h1{
                font-size: 20px;
                text-align: center;
            }
            &-list{
                &-link{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                    font-size: 15px;
                    text-align: center;
                    span{
                        font-size: 15px;
                    }
                }
            }
        }
    }
    @media (max-width:350px) {
        .danniy{
            h1{
                font-size: 18px;
                text-align: center;
            }
            &-list{
                &-link{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                    font-size: 15px;
                    text-align: center;
                    font-weight: 500;
                    span{
                        font-size: 15px;
                        font-weight: 500;
                    }
                }
            }
        }
    }
</style>