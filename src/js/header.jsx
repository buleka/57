import React from "react";


function Item(props){
    return (
        <li className={'menu__item'}><a href={'/'} className={'menu__link' + (props.index === 0 ?' menu__link--active':'')}>{props.title}</a></li>
    )
}

class Header extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        const listMenu = ['Home', 'Learn', 'About', 'Contact Us'];

        return(
            <header className={'header'}>
                <div className={'container'}>
                    <div className={'header__wrapper'}>
                        <nav>
                            <ul className={'menu'}>
                                {listMenu.map((item, index)=>{
                                    return (<Item title={item} key={item + index} index={index}/>)
                                })}
                            </ul>
                        </nav>
                        <a href={'/'} className={'header__button'}>Get Started</a>
                    </div>
                </div>
            </header>
        )
    }

}

export default Header;