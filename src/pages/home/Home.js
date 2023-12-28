import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactUs from "../../components/ContauctUs";
import './home.css';
import '../../assets/colors.css';
import information from '../../data/contauctUs.json';
//якщо перенести зображення в public ьо зображення передаються в усіх інших випадках вони не відображаються
function Home() {

    return (
        <div className="Home bg-white">
                <Header/>
            <div className='Full-block'>
                <div className='First-block'>
                    <div className='First-block-items'>
                        <h1 className='First-block-title tx-green Display-1'>
                            Піклуємося про вас та сім'ю
                        </h1>
                        <p className='First-block-body tx-white Display-2'>
                            Від загальної практики до спеціалізованих консультацій - ми тут для вас
                        </p>
                    </div>
                </div>
                <div className='Second-block bg-darkBlue'>
                    <p className='Second-block-body tx-white Title'>
                        Ласкаво запрошуємо до нашої сімейної поліклініки,
                        наша команда досвідчених лікарів готова вас обслуговувати, незалежно від віку та потреб.
                        Ми віримо, що здоров'я - це найцінніший актив,
                        і ми присвячені його збереженню для вас і вашої сім'ї.
                    </p>
                    {/*<ButtonV1 title='tt' onClick={checkFour}/>*/}
                </div>
                <div className='Third-block bg-light100'>
                    <h className='Third-block-title tx-black Display-2'>
                        Вітаємо в <span className='tx-green'>нашій клініці</span>
                    </h>
                    <div className='Third-block-img'></div>
                    <div className='Third-block-content bg-white'>
                        <p className='Third-block-content-title Title'><b>
                            Чому варто обирати нас</b>
                        </p>
                        <p className='Third-block-content-body Body'>
                            Ми - ваші надійні партнери у справі збереження здоров'я.
                            Наші кваліфіковані лікарі та сучасне обладнання
                            готові забезпечити вам найкращу медичну допомогу.
                            Перегляньте наш розклад, щоб знайти оптимальний час для вашого прийому,
                            і дозвольте нам допомогти вам залишитися здоровими.
                            Ваше добробуття - наше завдання.
                        </p>
                    </div>
                </div>
                <div className='Fourth-block'>
                    <h2 className='ContactUs-title tx-green Display-2'>
                        Зв'язок
                        <p className='tx-black Body2'>
                            з нами
                        </p>
                    </h2>
                    <div className='ContactUs-container'>
                            {information.map(item => {
                                return(
                                    <ContactUs key={item.id} card={item}/>
                                );
                            })}
                    </div>
                </div>
            </div>
                <Footer/>
        </div>
    );
}
export default Home;