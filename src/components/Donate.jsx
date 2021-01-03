import React from 'react';

const Donate = () => {
    return(
        <div className="main" id="donate">
            <div className="title-page">
                <div className="title-page-text">Помощь проекту</div>
                <div className="title-page-line"/>
            </div>

            <div className="donate_box">
                <div className="donate_b">
                <iframe
                    src="https://yoomoney.ru/quickpay/shop-widget?writer=seller&targets=%D0%9D%D0%B0%20%D1%85%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B3%20%D0%B8%20%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D1%8C%D0%BA%D0%B8&targets-hint=&default-sum=&button-text=13&payment-type-choice=on&hint=&successURL=&quickpay=shop&account=4100112683032758"
                    width="100%" height="222" frameBorder="0" allowTransparency="true" scrolling="no">
                </iframe>
                </div>
            </div>
        </div>
    );
}

export default Donate;