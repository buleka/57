import React from "react";


function Item(props) {
    return (
        <li className={'footer__item'}><a href={'/'} className={'footer__link'}>{props.title}</a></li>
    )
}

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const listMenu = [{
            title: 'Partnership',
            items: ['Website', 'Work', 'Agency']
        },
            {
                title: 'About',
                items: ['Our Skill', 'Job']
            },
            {
                title: 'Support',
                items: ['Support Request', 'Contact']
            }
        ];

        return (
            <footer className={'footer'}>
                <div className={'container container--l'}>
                    <div className={'grid grid--f'}>
                        <div>
                            <h3 className={'footer__title'}>Join Now With Us<br/>
                                Contact us</h3>
                            <p className={'footer__caption'}>Find out everything you need to know about our creativity
                                process and find the best
                                freelancers with us.</p>
                        </div>
                        <div className={'footer__menu'}>
                            <nav className={'footer--nav'}>
                                {listMenu.map((item, index) => {
                                    return (
                                        <ul className={'footer__menu'}>
                                            <li className={'footer__subtitle'}>{item.title}</li>
                                            {item.items.map((title, index) => {
                                                return (<Item title={title} key={title + index}/>)
                                            })}
                                        </ul>
                                    )
                                })}
                            </nav>
                            <div className={'footer__cr'}>All Right Reserved 2022</div>
                        </div>
                    </div>

                </div>
            </footer>
        )
    }

}

export default Footer;