<template>
    <div class="footer">
    <div class="container">
        <div class="footer__logo">
            <img src="../assets/imgs/logo.png" alt="">
            <p class="footer__logo-name">Главное Медицинское Управление при Администрации Президента Республики Узбекистан</p>
        </div>
        <div class="footer__info">
            <div class="footer__left">
            <div class="footer__left-one">
                <img src="../assets/imgs/locatsia.svg" alt="">
                Узбекистан  г. Ташкент, Яшнабадский район
                ул. С. Азимова-65
            </div>
            <div class="footer__left-twoo">
                <img src="../assets/imgs/phone.svg" alt="">
                <a href="tel:+998 555 03 03 00">
                    +998 555 03 03 00
                </a>
            </div>
            <div class="footer__left-thre">
                <img src="../assets/imgs/gmail.svg" alt="">
                <a href="mailto:info@apgmu.uz">
                    info@apgmu.uz
                </a>
            </div>

        </div>
        <div class="footer__right">
            <p class="footer__right-text">Copyright © 2020 - 2023 Главное медицинское управление при Администрации Президента Республики Узбекистан</p>
        </div>
        </div>
    </div>
   </div> 
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .footer{
        background: rgb(4, 4, 88);
        width: 100%;
        height: 100%;
        padding: 30px 0;
        margin-top: 50px;
        &__info{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &__logo{
            display: flex;
            align-items: center;
            gap: 30px;
            img{
                width: 120px;
                height: 120px;
            }
            &-name{
                color: white;
                font-size: 18px;
                font-weight: 600;
                width: 350px;
                text-align: center;
                line-height: 140%;
                padding: 10px;
                border-radius: 10px;
                box-shadow: 0 0 30px grey;
                transition: 0.5s;
                &:hover{
                    transform: scale(1.03);
                    box-shadow: 0 0 50px grey;
                }
            }
        }
        &__left{
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 10px;
            margin-top: 30px;
            &-one{
                display: flex;
                align-items: center;
                gap: 10px;
                color: black;
                font-size: 18px;
                background: white;
                padding: 0 10px;
                border-radius: 5px;
                font-weight: 600;
                img{
                    width: 30px;
                    height: 30px;
                }
            }
            &-twoo{
                display: flex;
                align-items: center;
                gap: 10px;
                background: white;
                padding: 0 10px;
                border-radius: 5px;
                a{
                    color: black;
                font-size: 18px;
                font-weight: 600;
                }
                img{
                    width: 30px;
                    height: 30px;
                }
            }
            &-thre{
                display: flex;
                align-items: center;
                gap: 10px;
                background: white;
                padding: 0 10px;
                border-radius: 5px;
                a{
                    color: black;
                font-size: 18px;
                }
                img{
                    width: 30px;
                    height: 30px;
                }
            }
        }
        &__right{
            &-text{
                color: white;
                width: 300px;
                text-align: justify;
                font-size: 18px;
                font-weight: 700;
                line-height: 140%;
                font-family: sans-serif;
                padding: 5px 10px;
                box-shadow: 0 0 15px 0 blue;
                border-radius: 10px;
            }
        }
    }
    @media (max-width:1200px) {
        .footer{
            &__logo{
                p{
                    font-size: 17px;
                    line-height: 120%;  
                }
                img{
                    width: 110px;
                    height: 110px;
                }
            }
            &__right{
                &-text{
                    font-size: 17px;
                    line-height: 120%;
                }
            }
        }
    }
    @media (max-width:1000px) {
        .footer{
            &__logo{
                p{
                    font-size: 17px;
                    line-height: 120%;  
                }
                img{
                    width: 110px;
                    height: 110px;
                }
            }
            &__right{
                &-text{
                    font-size: 17px;
                    line-height: 120%;
                }
            }
            &__left{
                flex-direction: column-reverse;
                &-one{
                    font-size: 17px;
                }
                &-twoo{
                    a{
                        font-size: 17px;
                    }
                }
            }
        }
    }
    @media (max-width:900px) {
        .footer{
            &__logo{
                p{
                    font-size: 16px;
                    line-height: 120%;  
                }
                img{
                    width: 100px;
                    height: 100px;
                }
            }
            &__right{
                &-text{
                    font-size: 16px;
                    line-height: 120%;
                }
            }
            &__left{
                flex-direction: column;
                align-items: end;
                margin: 10px 0 0;
                &-one{
                    font-size: 16px;
                }
                &-twoo,
                &-thre{
                    a{
                        font-size: 16px;
                    }
                }
            }
            &__info{
                flex-direction: column-reverse;
                align-items: end;
                margin-top: 20px;
            }
        }
    }
    @media (max-width:650px) {
        .footer{
            &__logo{
                p{
                    font-size: 15px;
                    line-height: 120%;  
                }
                img{
                    width: 80px;
                    height: 80px;
                }
            }
            &__right{
                &-text{
                    font-size: 15px;
                    line-height: 120%;
                }
            }
            &__left{
                flex-direction: column;
                align-items: end;
                margin: 10px 0 0;
                &-one{
                    font-size: 15px;
                }
                &-twoo,
                &-thre{
                    a{
                        font-size: 15px;
                    }
                }
            }
            &__info{
                flex-direction: column-reverse;
                align-items: end;
                margin-top: 20px;
            }
        }
    }
    @media (max-width:500px) {
        .footer{
            &__logo{
                p{
                    font-size: 14px;
                    line-height: 110%;  
                    width: 280px;
                }
                img{
                    width: 80px;
                    height: 80px;
                }
            }
            &__right{
                &-text{
                    font-size: 14px;
                    line-height: 110%;
                    width: 280px;
                }
            }
            &__left{
                flex-direction: column;
                align-items: end;
                margin: 10px 0 0;
                &-one{
                    font-size: 14px;
                    width: 300px;
                    img{
                        width: 20px;
                        height: 20px;
                    }
                }
                &-twoo,
                &-thre{
                    a{
                        font-size: 15px;
                        
                    }
                    img{
                        width: 20px;
                        height: 20px;
                    }
                }
            }
            &__info{
                flex-direction: column-reverse;
                align-items: end;
                margin-top: 20px;
            }
        }
    }
    @media (max-width:400px) {
        .footer{
            padding: 10px;
            &__logo{
                p{
                    font-size: 14px;
                    line-height: 110%;  
                    width: 250px;
                }
                img{
                    width: 70px;
                    height: 70px;
                }
            }
            &__right{
                &-text{
                    font-size: 14px;
                    line-height: 110%;
                    max-width: 250px;
                    width: 100%;
                }
            }
            &__left{
                flex-direction: column;
                align-items: end;
                margin: 10px 0 0;
                &-one{
                    font-size: 14px;
                    max-width: 280px;
                    width: 100%;
                    img{
                        width: 20px;
                        height: 20px;
                    }
                }
                &-twoo,
                &-thre{
                    a{
                        font-size: 15px;
                        
                    }
                    img{
                        width: 20px;
                        height: 20px;
                    }
                }
            }
            &__info{
                flex-direction: column-reverse;
                align-items: end;
                margin-top: 20px;
            }
        }
    }
</style>