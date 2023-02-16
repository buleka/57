import React from "react";

import Image from '../photos/image.jpeg'

class Section3 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={'section section--grid'}>
                <div className={'container'}>
                    <div className={'container__content'}>
                        <div className={'grid grid--img'}>
                            <div className={'grid__item-img'}>
                                <img src={Image}/>
                            </div>
                            <div>
                                <h2 className={'title'}>Design & Business<br/>For Better Solution</h2>
                                <p className={'text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi senectus at habitant.
                                    amet, consectetur adipiscing elit. Mi senectus at habitant. amet, consectetur
                                    adipiscing elit</p>
                            </div>
                        </div>
                        <div className={'grid grid--img grid--revert'}>
                            <div className={'grid__item-img'}>
                                <img src={Image}/>
                            </div>
                            <div>
                                <h2 className={'title'}>Design & Business<br/>For Better Solution</h2>
                                <p className={'text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi senectus at habitant.
                                    amet, consectetur adipiscing elit. Mi senectus at habitant. amet, consectetur
                                    adipiscing elit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Section3;