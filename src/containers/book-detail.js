import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render () {
        if (!this.props.book)
        {
            return <div>책을 선택하세요!</div>
        }

        return (
            <div>
                <div>test</div>
                <div>{this.props.book.title}</div>
                <div>{this.props.book.page}</div>
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        book : state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);