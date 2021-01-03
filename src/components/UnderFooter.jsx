import React from 'react';

const UnderFooter = () => {
    return(
        <div className="under-footer">
            <div className="author">
                © 2020. Автор проекта: <span>Алексей Самойлов</span>
            </div>
            <div className="email">alexeysidorov063@gmail.com</div>
            <a href="/donate"><div className="donate">ПОДДЕРЖАТЬ ПРОЕКТ</div></a>
        </div>
    );
}

export default UnderFooter;