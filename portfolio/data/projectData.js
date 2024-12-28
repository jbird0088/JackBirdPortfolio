const projects = [
  {
    title: "RBC Capstone Project",
    description:
      "The RBC Capstone Project is an advanced platform designed to forecast quarterly revenue fluctuations caused by extreme weather events. This solution empowers financial teams to make informed decisions by providing actionable insights through data analytics, machine learning, and weather pattern prediction.",
    techStack: ["React", "Node.js", "MongoDB", "Python"],
    features: [
      "Predictive Analytics: Accurately forecasts revenue trends based on historical and real-time weather data.",
      "Interactive Dashboard: Offers an intuitive user interface built with React, allowing users to explore data visualizations and projections easily.",
      "Robust Backend: Built with Node.js and MongoDB for secure data storage and fast performance.",
      "Scalable Architecture: Designed to handle large datasets and expand to additional use cases in the future, such as disaster recovery planning or supply chain optimization.",
    ],
    image: "/image/RBC_Project.webp",
    link: "#",
    nda: true,
    type: "nda",
  },
  {
    title: "Golf Cart Management System",
    description:
      "A tailored web app designed to update the pro shop in real time about golf cart availability, streamlining operations and enhancing communication.",
    techStack: ["Next.js", "Firebase", "TailwindCSS"],
    features: [
      "Real-Time Updates: Tracks when carts are available or unavailable and instantly updates the pro shop staff for efficient management.",
      "User-Friendly Interface: Built using React, it allows staff to view and manage cart availability quickly and without confusion.",
      "Backend Reliability: Utilizes Node.js and MongoDB to handle and store data for cart statuses securely and efficiently.",
      "Streamlined Communication: Eliminates delays by providing instant updates, enabling the pro shop to allocate or sell carts as needed.",
      "Operational Efficiency: Reduces manual effort and errors, improving the overall workflow for golf course staff and pro shop operations.",
    ],
    image: "/image/golf_management.webp",
    link: "files/Golf_Management.pdf",
    nda: false,
    type: "pdf",
  },
  {
    title: "Sentiment Analysis with LSTM",
    description:
      "A deep learning-powered tool designed to analyze the sentiments expressed in IMDB movie reviews, leveraging the advanced capabilities of Long Short-Term Memory (LSTM) networks.",
    techStack: ["Python", "TensorFlow", "Keras"],
    features: [
      "Bidirectional LSTM Architecture: Processes textual data in both forward and backward directions, enabling a comprehensive contextual understanding.",
      "Data Preprocessing: Implements tokenization, vocabulary capping, and padding of IMDB reviews to prepare data for neural network training.",
      "Robust Model Design: Incorporates dropout layers for regularization and L2 penalties to mitigate overfitting and enhance model generalization.",
      "Optimized Workflow: Utilizes the Adam optimizer for adaptive learning rates and early stopping to prevent overfitting during training.",
    ],
    image: "/image/AI_Project.webp",
    link: "files/AI_Final_Project.pdf",
    nda: false,
    type: "pdf",
  },
  {
    title: "The Chronicles of DICE MAN",
    description:
      "An innovative platformer game developed for the GMTK Game Jam 2022, featuring a unique die roll mechanic that determines the protagonist's abilities.",
    techStack: ["Unity", "C#", "2D Art", "Game Design"],
    features: [
      "Dynamic Gameplay: Player abilities are randomized with every die roll, adding an element of unpredictability and replayability.",
      "Immersive Design: Built with Unity, it features visually appealing 2D art and engaging sound effects to immerse players in the game world.",
      "Modular Mechanics: Designed with scalable mechanics, allowing future updates to include new abilities, levels, and challenges.",
      "Game Jam Success: Developed under a tight deadline for the GMTK Game Jam, showcasing the team's creativity and efficiency.",
    ],
    image: "/image/Dice_man.webp",
    link: "https://jbird88.itch.io/the-chronicles-of-dice-man",
    nda: false,
    type: "website",
  },
];

export default projects;
