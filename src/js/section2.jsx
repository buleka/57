import React from "react";

import Icon1 from '../image/icon1.svg'
import Icon2 from '../image/icon2.svg'
import Icon3 from '../image/icon3.svg'
import Icon4 from '../image/icon4.svg'

function Item(props) {
    return (
        <li className={'list-links__item'}><a className={'list-links__link'} href={'/'}><img src={props.icon}/></a></li>
    )
}

class Section2 extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const icons = [Icon1, Icon2, Icon3, Icon4];

        return (
            <section className={'section'}>
                <div className={'container'}>
                    <div className={'section__wrapper-pink'}>
                        <div className={'grid grid--pink'}>
                            <div>
                                <h2 className={'section__title section__title--white'}>We add value to Our
                                    studets Journey</h2>
                                <a href={'/'} className={'button button--white'}>Learn More</a>
                            </div>
                            <div className={'list-links'}>
                                <ul className={'grid grid-sm'}>
                                    {icons.map((icon, index) => {
                                        return (<Item icon={icon} key={index}/>)
                                    })}

                                </ul>
                            </div>
                        </div>


                    </div>
                </div>

            </section>
        )
    }
}

export default Section2;