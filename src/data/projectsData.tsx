import type { ProjectInfos } from "../utils/types";

export const projectsData: ProjectInfos[] = [
	{
		name: 'Genetics Game - Creature Simulation Engine',
		image: `${import.meta.env.BASE_URL}projects/genetics_game.png`,
		description: (<>
			<p>
				A <strong>JavaFX desktop game</strong> where players collect, breed, and
				battle creatures called <strong>Beasts</strong>.
			</p>
			<p>
				Each creature has its own stats {"("} health, defense, strength, speed {")"} passed down to
				offspring through <strong>breeding</strong> and <strong>genetic
					fusion</strong>, with some random mutation along
				the way.
			</p>
			<p>
				The project explores <strong>MVC architecture</strong>,
				service layers, FXML, and <strong>data binding</strong> across a
				multi-screen interface {"("} lab, shop, arena {")"}.
			</p>
		</>),
		skillsName: ['Java', 'JavaFX', 'Scene Builder', 'Maven'],
		date: 'Aug 2026 - Today',
	},
	{
		name: 'Machine Learning Internship - University of Tsukuba',
		image: `${import.meta.env.BASE_URL}projects/machine_learning_internship.png`,
		description: (<>
			<p>
				A <strong>machine learning project</strong> carried out at the
				University of Tsukuba in Japan, focused on predicting
				<strong> wine quality</strong> from chemical and physical characteristics.
				The project aimed to explore how these features could be used for prediction.
			</p>
			<p>
				I performed <strong>exploratory data analysis</strong> and compared
				several <strong>supervised learning models</strong> to identify the
				most suitable approach. I also analyzed the factors influencing model
				performance and the quality of the predictions.
			</p>
		</>),
		skillsName: ['Python', 'Scikit-Learn', 'Machine Learning'],
		date: 'Apr 2026 - Jun 2026',
	},
	{
		name: 'BST vs AVL - Performance Analysis',
		image: `${import.meta.env.BASE_URL}projects/bst_avl.png`,
		description: (<>
			<p>
				A <strong>Java project</strong> comparing Binary Search Trees (BST)
				and <strong>AVL trees</strong> to study the impact of tree balancing
				on algorithmic performance in different use cases.
			</p>
			<p>
				Both data structures were implemented and a <strong> benchmarking
					protocol</strong> was designed to cover average and worst-case
				scenarios. The results were then analyzed and visualized to compare
				their efficiency.
			</p>
		</>),
		skillsName: ['Java', 'JUnit', 'Python', 'Matplotlib'],
		date: 'Dec 2025',
	},
	{
		name: 'Graph Software',
		image: `${import.meta.env.BASE_URL}projects/graph_software.png`,
		description: (<>
			<p>
				An <strong>interactive graph visualization tool</strong> designed to
				explore complex networks and experiment with different graph algorithms
				through a visual and dynamic interface.
			</p>
			<p>
				I worked on improving the graph visualization system, including the
				<strong>force-directed layout</strong> and automatic sizing of elements.
				The application was also adapted to load graphs from different
				<strong> CSV files</strong>.
			</p>
			<p>
				The project also involved writing <strong>tests</strong> to ensure the
				reliability of the application and producing <strong>Javadoc </strong>
				to document the code and make the system easier to maintain.
			</p>
		</>),
		skillsName: ['Java', 'Graph Algorithms', 'JUnit', 'Javadoc'],
		date: 'May 2025 - Jun 2025',
	},
	{
		name: 'Academy of Doom',
		image: `${import.meta.env.BASE_URL}projects/academy_of_doom.png`,
		description: (<>
			<p>
				A <strong>C#/.NET game development project</strong> where we took over
				an existing game and improved it by adding new gameplay features while
				working with an unfamiliar codebase.
			</p>
			<p>
				I analyzed and refactored the existing code to improve its structure
				and reliability, while also developing a new <strong>graphical interface </strong>
				with an intuitive menu and fixing several existing bugs.
			</p>
		</>),
		skillsName: ['C#', '.NET', 'GitLab'],
		date: 'Mar 2025 - Avr 2025',
	},
]