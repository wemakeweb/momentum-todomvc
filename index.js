import Composer from './components/Composer/index';
import TodoList from './components/TodoList/index';
import Footer from './components/Footer/index';

export class App extends Momentum.Component {
	render(){
		return (
			<div>
				<section class="todoapp">
					<Composer />
					<section class="main">
						<TodoList />
					</section>
					<footer class="footer">
						<Footer />
					</footer>
				</section>
				<footer class="info">
					<p>Created by <a href="http://todomvc.com">Sebastian Otto</a></p>
					<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
				</footer>
			</div>
		);
	}
}