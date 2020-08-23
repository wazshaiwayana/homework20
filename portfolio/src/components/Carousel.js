

import React from 'react';

import Card from './Card';
import WeatherApp from '../img/weatherApp.png';
import project1 from '../img/project1.png';
import CalenderApp from '../img/calenderApp.png';
import project2 from '../img/project2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'project1',
                    subTitle: 'Travoogle',
                    imgSrc: project1,
                    link: 'https://github.com/wazshaiwayana/project1',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Project2',
                    subTitle: 'The Reverse Yelp!',
                    imgSrc: project2,
                    link: 'https://github.com/Sanderschhun/project2',
                    selected: false
                },
                {
                    id: 2,
                    title: 'WeatherApp',
                    subTitle: 'Weather Dashboard',
                    imgSrc: WeatherApp,
                    link: 'https://github.com/wazshaiwayana/homework6',
                    selected: false
                },
                {
                    id: 3,
                    title: 'CalenderApp',
                    subTitle: 'Weather Dashboard',
                    imgSrc: CalenderApp,
                    link: 'https://github.com/wazshaiwayana/homework5',
                    selected: false
                },
             
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;