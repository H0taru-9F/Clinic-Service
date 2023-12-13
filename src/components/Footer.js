import React from "react";
import './styles/footer.css';
import '../assets/typography.css';
const Footer = () => {
    return(
        <footer className="App-footer bg-darkBlue">
            <div className='Container-footer'>
                <div className='Logo-footer'>
                        <svg className='SVG-logo-footer' xmlns="http://www.w3.org/2000/svg" width="50" height="57" viewBox="0 0 50 57" fill="none">
                            <g clip-path="url(#clip0_249_113)">
                                <path d="M27.0272 1.52588e-05C32.6783 1.52588e-05 37.838 1.96049 42.3835 5.88144C42.752 6.24902 42.8749 6.86168 42.6292 7.35179C42.5063 7.71938 27.15 37.9842 9.70532 54.1581C9.70532 54.1581 9.58247 54.1581 9.58247 54.2806C9.33677 54.5257 6.75692 56.3636 4.42276 56.3636C3.31712 56.3636 0.860111 55.8735 0.737263 51.8301C0.491562 49.6245 -3.68534 17.3992 11.3024 5.02373C11.5481 4.77867 18.3048 1.52588e-05 27.0272 1.52588e-05ZM40.0493 7.22926C36.1181 4.0435 31.8183 2.57314 27.0272 2.57314C19.1648 2.57314 12.7766 6.9842 12.7766 7.10673C-1.22834 18.747 3.19426 51.3399 3.19426 51.7075V51.8301C3.19426 54.0356 4.05421 54.0356 4.42276 54.0356C5.65127 54.0356 7.49402 52.9328 8.10827 52.4427C23.5874 37.9842 37.3466 12.253 40.0493 7.22926ZM45.4547 10.0474C45.8233 10.0474 46.1918 10.17 46.4375 10.5376C46.6832 10.9052 52.9486 18.502 48.2803 32.3478C48.1574 32.7154 44.2262 43.0079 28.9928 47.7866C28.5014 47.9091 28.01 47.7866 27.6414 47.419C27.2729 47.0514 27.2729 46.4387 27.5186 46.0712C27.6414 45.8261 38.3294 28.0593 44.3491 10.9052C44.4719 10.5376 44.8405 10.17 45.3319 10.0474H45.4547ZM31.3269 44.3557C42.9977 39.5771 45.9461 31.6127 45.9461 31.4901C48.7717 22.9131 47.0518 17.0316 45.7004 14.0909C41.155 26.5889 34.521 38.8419 31.3269 44.3557Z" fill="#23AB7D"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_249_113">
                                    <rect width="50" height="56.3636" fill="white" transform="matrix(-1 0 0 -1 50 56.3636)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <p className='title-logo-footer tx-light100 Display-2'>Подорожник</p>
                </div>
                <div className='Links-footer'>
                    <p className='tx-green Body'>Посилання</p>
                    <a className='link-footer-colum tx-light100 Button-text-link-2' href='/'>Головна</a>
                    <a className='link-footer-colum tx-light100 Button-text-link-2' href='/shedule'>Розклад</a>
                    <a className='link-footer-colum tx-light100 Button-text-link-2' href='/procedurerooms'>Процедурні кабінети</a>
                    <a className='link-footer-colum tx-light100 Button-text-link-2' href='/account'>Особистий кабінет</a>
                </div>
                <div className='Contact-footer tx-white'>
                    <p className='tx-green Body'>Зв'язатися</p>
                    <p className='contact-footer-colum tx-light100 Body'>Телефон: (380) 973-516-905</p>
                    <p className='contact-footer-colum tx-light100 Body'>Email: podoroznik@gmil.com</p>
                    <p className='contact-footer-colum tx-light100 Body'>Адреса: вул. В'ячеслава Чорновола, 44 Івано-Франківськ</p>
                    <p className='contact-footer-colum tx-light100 Body'>Робочі години: Пн-Сб 09:00-20:00</p>
                </div>
                <div className='AboutUs-footer tx-light100'>
                    <p className='tx-green Body'>Про нас</p>
                    <p className='aboutUs-footer-colum Small'>
                        Наша поліклініка - це команда досвідчених лікарів,
                        які присвятили своє життя відновленню вашого здоров'я.
                        Ми обіцяємо надавати вам високоякісну медичну
                        допомогу з турботою та відповідальністю.
                        Дізнайтеся більше про нашу поліклініку та нашу команду.
                        Ваше здоров'я - наша головна мета.
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;