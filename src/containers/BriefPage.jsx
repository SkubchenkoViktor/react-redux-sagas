import React from 'react'
import AttractionTypeCard from "../components/AttractionTypeCard";
import {connect} from "react-redux";
import {fetchPlaces} from '../actions'
import AttractionBriefInfo from "../components/AttractionBriefInfo";

class BriefPage extends React.Component {
    componentWillMount() {
        const {fetchPlaces} = this.props;
        let url = this.props.location.pathname;
        const attractionType = url.slice(1, url.length)
        fetchPlaces(attractionType)
    }

    componentDidMount() {

    }

    render() {
        const {places} = this.props;

        if (places.length === 0) return null;

        return <React.Fragment>
            {places.map(place => (
                <AttractionBriefInfo {...place} />
            ))}
        </React.Fragment>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        places: state.places.list
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPlaces: (attractionType) => dispatch(fetchPlaces(attractionType))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BriefPage)