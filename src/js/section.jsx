import React from "react";

class Section extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <section className={'section section--bg'}>
                <div className={'container'}>
                    <h1 className={'section__title'}>Learn <b>New Skills</b><br/>
                        Online With Top<br/>
                        Educators</h1>
                    <p className={'section__text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi senectus at.</p>
                    <a href={'/'} className={'button'}>Learn More</a>
                </div>
            </section>
        )
    }
}

export default Section;