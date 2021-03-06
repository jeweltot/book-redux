import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render () {
        if (!this.props.book)
        {
            var a = 1;
            return <div>책을 선택하세요</div>
        }

        return (
            <div>
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