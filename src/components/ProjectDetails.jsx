// src/components/ProjectDetails.jsx
import goBuddyImg from '../assets/buddy.webp'
import imagifyImg from '../assets/imagify.webp'
import wanderlustImg from '../assets/wanderlust.webp'
import visualizerImg from '../assets/visualizer.webp'
import expenseImg from '../assets/expense.webp'
import newsXpressImg from '../assets/newsxpress.webp' // Make sure to add this image to your assets folder

const projectDetails = [
  {
    id: 1,
    title: "Go-Buddy",
    main: "A smart travel assistant platform offering personalized recommendations and itineraries.",
    image: goBuddyImg,
    demoLink: "https://go-buddy-zl60.onrender.com/",
    sourceLink: "https://github.com/poojasharma3105/Go-Buddy"
  },
  {
    id: 2,
    title: "Imagify",
    main: "An AI-powered image enhancement platform that allowing users to manipulate images.",
    image: imagifyImg,
    demoLink: "https://imagify-frontend-aguf.onrender.com/",
    sourceLink: "https://github.com/poojasharma3105/Imagify"
  },
  {
    id: 3,
    title: "Wanderlust",
    main: "A travel-based web application that allows users to browse and book accommodations seamlessly.",
    image: wanderlustImg,
    demoLink: "https://wanderlust-dkdz.onrender.com/listings",
    sourceLink: "https://github.com/poojasharma3105/Wanderlust"
  },
  {
    id: 4,
    title: "Track My Expense",
    main: "A financial tracking tool to help users manage their income, expenses, and budgeting efficiently.",
    image: expenseImg,
    demoLink: "https://track-my-expense-1.onrender.com",
    sourceLink: "https://github.com/poojasharma3105/Track-My-Expense"
  },
  {
    id: 5,
    title: "Sorting-Visualizer",
    main: "An interactive tool for visualizing different sorting algorithms in real time.",
    image: visualizerImg,
    demoLink: "https://sorting-visualizer-bvf4.onrender.com/",
    sourceLink: "https://github.com/poojasharma3105/Sorting-Visualizer"
  },
  {
    id: 6,
    title: "NewsXpress",
    main: "A modern news web application that fetches and displays the latest articles across categories using live news APIs.",
    image: newsXpressImg,
    demoLink: "https://newsxpress-evdl.onrender.com/",
    sourceLink: "https://github.com/poojasharma3105/NewsXpress"
  }
]

export default projectDetails
