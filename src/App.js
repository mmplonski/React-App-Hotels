import './App.css';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";
import React, {Component} from "react";
import LoadingIcon from "./components/UI/LoadingIcon/LoadingIcon";
import Searchbar from "./components/UI/Searchbar/Searchbar";
import Layout from "./components/Layout/Layout";
import Footer from './components/Footer/Footer'
import ThemeButton from "./components/UI/ThemeButton/ThemeButton";
import ThemeContext from "./context/themeContext";

class App extends Component {
    onSearch = (term) => {
        console.log('Search z App')
        console.log(term)
    }
    hotels = [
        {
            id: 1,
            name: "Pod akacjami",
            city: "Warszawa",
            rating: 8.3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua.",
            image: ''
        },
        {
            id: 2,
            name: "Dębowy",
            city: "Lublin",
            rating: 8.8,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua.",
            image: ''
        }
    ];
    state = {
        hotels: [],
        loading: true,
        theme: 'success'
    };

    searchHandler(term) {
        console.log('Szukaj z app', term)
        const hotels = [...this.hotels]
            .filter(x => x.name
                .toLowerCase()
                .includes(term.toLowerCase()));
        this.setState({hotels})
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                hotels: this.hotels,
                loading: false
            })
        }, 1000)
    }

    changeTheme = () => {
        const newTheme = this.context === 'success' ?  'danger' : 'success';
        this.setState({theme: newTheme})
    }

    render() {
        const header = (
            <Header>
                <Searchbar
                    onSearch={term => this.onSearch(term)}
                />
                <ThemeButton onChange={this.changeTheme}/>
            </Header>
        )

        const menu = (<Menu/>)
        const content = (
            this.state.loading ? (
                <LoadingIcon/>
            ) : (
                <Hotels
                    hotels={this.state.hotels}
                />
            )
        )
        const footer = (<Footer/>)

        return (
            <ThemeContext.Provider value={"success"}>
            <Layout
                header={header}
                menu={menu}
                content={content}
                footer={footer}
            />
            </ThemeContext.Provider>
        );
    }
}

export default App;
