import React from 'react';
import '../css/components.css';
import ava from "../img/ava.jpg";

const Home = () => {
    return(
        <div className="main">
            <div className="top">
                <div className="title">
                    <div className="title-text">Главная</div>
                    <div className="title-line"/>
                </div>
                <a href="/posts/new"><div className="create-post">
                    Написать пост
                </div></a>
            </div>
            <div className="publications_m">

                <div className="publication first">
                    <a href="publications/d12di33slm"><div className="title">Создаем свою CRUD API на Express и MySQL: часть первая
                    </div></a>
                    <div className="params">
                        <div className="user">
                            <div className="ava"><img src={ava} alt=""/></div>
                            <div className="username">p0nch131</div>
                        </div>
                        <div className="views">12 просмотров</div>
                    </div>
                    <div className="tags">
                        <div className="tag first">Node JS</div>
                        <div className="tag">Дизайн</div>
                    </div>
                    <a href="publications/d12di33slm"> <div className="text">
                        Express один из самых популярных веб-фреймворков, который поддерживает роутинг, миддлвейрс и систему шаблонов. Делать бэкенд на Node.js без Express в 2020 году — довольно странное занятие, ведь Express де-факто — каркас для создания веб-приложения на Node.js. Сегодня мы попробуем создать несложное CRUD API используя базу данных MySQL. Опытный в Node.js читатель спросит, а где же MongoDB, с которым Node.js обычно применятся в паре но, скажу сразу, это статья больше для PHP разработчиков, которые хотят немного потрогать Node.js, и чтобы смягчить переход в новую экосистему мы воспользуемся MySQL. API мы будем создавать для несложного Todo приложения, на тот случай, если кто-то захочет к своей todo (и даже неважно, написанной с помощью React или нет), присоединить немного бэка и поиграть с ним.
                        В нашем приложении можно будет создавать, получать, обновлять и удалять Todo. В общем, у нас будет минимальный набор функций CRUD (create read update delete). В конце мы совместим приложение c приложением на React и все протестируем.
                    </div></a>
                </div>

                <div className="publication first">
                    <a href="publications/d12di33slm"><div className="title">Что такое стек MERN, и как с ним работать? / Блог компании
                        Издательский дом «Питер»
                    </div></a>
                    <div className="params">
                        <div className="user">
                            <div className="ava"><img src={ava} alt=""/></div>
                            <div className="username">p0nch131</div>
                        </div>
                        <div className="views">512 просмотров</div>
                    </div>
                    <div className="tags">
                        <div className="tag first">Программирование</div>
                        <div className="tag">C#</div>
                        <div className="tag">Базы данных</div>
                    </div>
                    <a href="publications/d12di33slm"> <div className="text">
                        Таким образом реализация намеченных плановых заданий позволяет оценить значение
                        дальнейших направлений развития. Не следует, однако забывать, что дальнейшее развитие
                        различных форм деятельности обеспечивает широкому кругу (специалистов) участие в
                        формировании существенных финансовых и административных условий
                    </div></a>
                </div>
                <div className="publication first">
                    <a href="publications/d12di33slm"><div className="title">Что такое стек MERN, и как с ним работать? / Блог компании
                        Издательский дом «Питер»
                    </div></a>
                    <div className="params">
                        <div className="user">
                            <div className="ava"><img src={ava} alt=""/></div>
                            <div className="username">p0nch131</div>
                        </div>
                        <div className="views">512 просмотров</div>
                    </div>
                    <div className="tags">
                        <div className="tag first">Программирование</div>
                        <div className="tag">C#</div>
                        <div className="tag">Базы данных</div>
                    </div>
                    <a href="publications/d12di33slm"> <div className="text">
                        Таким образом реализация намеченных плановых заданий позволяет оценить значение
                        дальнейших направлений развития. Не следует, однако забывать, что дальнейшее развитие
                        различных форм деятельности обеспечивает широкому кругу (специалистов) участие в
                        формировании существенных финансовых и административных условий
                    </div></a>
                </div>

                <div className="publication first">
                    <a href="publications/d12di33slm"><div className="title">Что такое стек MERN, и как с ним работать? / Блог компании
                        Издательский дом «Питер»
                    </div></a>
                    <div className="params">
                        <div className="user">
                            <div className="ava"><img src={ava} alt=""/></div>
                            <div className="username">p0nch131</div>
                        </div>
                        <div className="views">512 просмотров</div>
                    </div>
                    <div className="tags">
                        <div className="tag first">Программирование</div>
                        <div className="tag">C#</div>
                        <div className="tag">Базы данных</div>
                    </div>
                    <a href="publications/d12di33slm"> <div className="text">
                        Таким образом реализация намеченных плановых заданий позволяет оценить значение
                        дальнейших направлений развития. Не следует, однако забывать, что дальнейшее развитие
                        различных форм деятельности обеспечивает широкому кругу (специалистов) участие в
                        формировании существенных финансовых и административных условий
                    </div></a>
                </div>

                <div className="publication first">
                    <a href="publications/d12di33slm"><div className="title">Что такое стек MERN, и как с ним работать? / Блог компании
                        Издательский дом «Питер»
                    </div></a>
                    <div className="params">
                        <div className="user">
                            <div className="ava"><img src={ava} alt=""/></div>
                            <div className="username">p0nch131</div>
                        </div>
                        <div className="views">512 просмотров</div>
                    </div>
                    <div className="tags">
                        <div className="tag first">Программирование</div>
                        <div className="tag">C#</div>
                        <div className="tag">Базы данных</div>
                    </div>
                    <a href="publications/d12di33slm"> <div className="text">
                        Таким образом реализация намеченных плановых заданий позволяет оценить значение
                        дальнейших направлений развития. Не следует, однако забывать, что дальнейшее развитие
                        различных форм деятельности обеспечивает широкому кругу (специалистов) участие в
                        формировании существенных финансовых и административных условий
                    </div></a>
                </div>

                <div className="publication first">
                    <a href="publications/d12di33slm"><div className="title">Что такое стек MERN, и как с ним работать? / Блог компании
                        Издательский дом «Питер»
                    </div></a>
                    <div className="params">
                        <div className="user">
                            <div className="ava"><img src={ava} alt=""/></div>
                            <div className="username">p0nch131</div>
                        </div>
                        <div className="views">512 просмотров</div>
                    </div>
                    <div className="tags">
                        <div className="tag first">Программирование</div>
                        <div className="tag">C#</div>
                        <div className="tag">Базы данных</div>
                    </div>
                    <a href="publications/d12di33slm"> <div className="text">
                        Таким образом реализация намеченных плановых заданий позволяет оценить значение
                        дальнейших направлений развития. Не следует, однако забывать, что дальнейшее развитие
                        различных форм деятельности обеспечивает широкому кругу (специалистов) участие в
                        формировании существенных финансовых и административных условий
                    </div></a>
                </div>

                <div className="publication first">
                    <a href="publications/d12di33slm"><div className="title">Что такое стек MERN, и как с ним работать? / Блог компании
                        Издательский дом «Питер»
                    </div></a>
                    <div className="params">
                        <div className="user">
                            <div className="ava"><img src={ava} alt=""/></div>
                            <div className="username">p0nch131</div>
                        </div>
                        <div className="views">512 просмотров</div>
                    </div>
                    <div className="tags">
                        <div className="tag first">Программирование</div>
                        <div className="tag">C#</div>
                        <div className="tag">Базы данных</div>
                    </div>
                    <a href="publications/d12di33slm"> <div className="text">
                        Таким образом реализация намеченных плановых заданий позволяет оценить значение
                        дальнейших направлений развития. Не следует, однако забывать, что дальнейшее развитие
                        различных форм деятельности обеспечивает широкому кругу (специалистов) участие в
                        формировании существенных финансовых и административных условий
                    </div></a>
                </div>


            </div>
        </div>
    );
}

export default Home;