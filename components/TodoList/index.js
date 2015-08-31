import ListItem from '../ListItem/index';
import TodoStore from '../../stores/TodoStore';

export default class TodoList extends Momentum.Component {
	storeSelect(){
		return TodoStore.find({});
	}

	storeDidUpdate(todos){
		this.setState({todos: todos})
	}

	markAllChecked(){
		TodoStore.find({}).then((records) => {
			records
				.map((record) => record.id)
				.map((id) => TodoStore.updateById(id, {checked: true}))
		});
	}

	render(){
		let todos = [];
		if(this.state.todos){
			todos = Array.from(this.state.todos).map((todo) => {
				return (<ListItem id={todo.id} title={todo.title} checked={todo.checked} />);
			});
		}
		
		return (
			<div>
				<input class="toggle-all" type="checkbox" />
				<label for="toggle-all" onclick={this.markAllChecked}>Mark all as complete</label>
				<ul class="todo-list">{todos}</ul>
			</div>
		);
	}
}