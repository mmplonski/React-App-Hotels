import React from "react";
import styles from './Hotel.module.css'
import hotelImg from './../../../assets/immages/hotel.jpg'
import PropTypes from 'prop-types';
import ThemeContext from "../../../context/themeContext";

const propsTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
}


function Hotel(props) {
    return (
        <div className={`card ${styles.hotel}`}>
            <div className={"card-body"}>
                <div className={`row`}>
                    <div className={"col-4"}>
                        <img src={hotelImg}
                             alt={""}
                             className={"img-fluid img-thumbnail"}
                        />
                    </div>
                    <div className={"col-8"}>
                        <div className={"row"}>
                            <div className={"col"}>
                                <p className={styles.title}>{props.name}</p>
                                <p className={"font-weight-bold"}>{props.city}</p>
                            </div>
                            <div className={"col text-end"}>
                                <p>Ocena {props.rating}</p>
                                <ThemeContext.Consumer>
                                    {value => (
                                        <a href={"#"} className={`btn btn-${value} mt-2 px-5 float-end`}>Pokaż</a>
                                    )}
                                </ThemeContext.Consumer>
                            </div>
                        </div>
                    </div>
                    <div className={"col-12"}>
                        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

Hotel.propTypes = propsTypes;

export default Hotel