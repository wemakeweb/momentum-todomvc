import TodoStore from '../../stores/TodoStore';

let ENTER = 13; 

export default class Composer extends Momentum.Component {
	onKeyDown(event){
		if(event.keyCode != 13){
			return
		}

		let value = this.find('input').value;

		if(!value || value.trim() === ''){
			return;
		}

		TodoStore.create({
			title: value.trim(),
			checked: false
		}).catch((err) => {
			console.log(err);
		});

		// reset input
		this.find('input').value = '';
	}

	render(){
		return (<div>
			<header class="header">
				<h1>todos</h1>
				<input
					class="new-todo"
					placeholder="What needs to be done?"
					onkeydown={this.onKeyDown}
					autoFocus={true}
				/>
			</header>
		</div>);
	}
}


