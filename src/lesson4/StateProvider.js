import React, { Component } from 'react';
import { FILTER_ALL } from './services/filter';
import { MODE_CREATE, MODE_NONE } from './services/mode';
import { objectWithOnly, wrapChildrenWith } from './utils/common';
import { getAll, addToList, updateStatus,deleteStatus } from './services/todo';

class StateProvider extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            mode: MODE_CREATE,
            filter: FILTER_ALL,
            items: getAll(),
            title: "My TodoList"
        }
    }

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus', 'changeMode', 'setSearchQuery','deleteChangeStatus'])
        });

        return <div>{children}</div>;
    }

    addNew(text) {
        let updatedList = addToList(this.state.items, { text, completed: false });

        this.setState({ items: updatedList });
    }

    changeFilter(filter) {
        this.setState({ filter });
    }

    changeStatus(itemId, completed) {
        const updatedList = updateStatus(this.state.items, itemId, completed);
        this.setState({ items: updatedList });
    }
    deleteChangeStatus(itemId) {
        console.log("idshanchu",itemId)
       const updatedList = deleteStatus(this.state.items,itemId)


        this.setState({ items: updatedList });
        

    } 

    changeMode(mode = MODE_NONE) {
        this.setState({ mode });
    }

    setSearchQuery(text) {
        this.setState({ query: text || '' });
    }
}

export default StateProvider;
