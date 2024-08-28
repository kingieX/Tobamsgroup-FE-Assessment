# Recipe Website Project

This project is a fully functional recipe website built using Next.js and TypeScript. It showcases various recipes, allows users to explore categories, view Instagram posts, and subscribe to a newsletter. The website is designed to be responsive, ensuring a seamless experience across both desktop and mobile devices.

## 🎯 Features

- **Dynamic Data:** Categories, recipes, and Instagram posts are rendered dynamically from data files.
- **Responsive Design:** The website is fully responsive, adapting beautifully to both desktop and mobile views.
- **Reusability:** The project utilizes reusable components for scalability and maintainability.
- **Interactivity:** Includes interactive sections like Instagram cards and a newsletter subscription form.
- **TypeScript:** Built with TypeScript for improved code quality and better development experience.

## 🛠️ Technologies Used

- **Next.js:** Framework for React to build server-side rendering and static web applications.
- **React:** JavaScript library for building user interfaces.
- **TypeScript:** Typed superset of JavaScript that provides optional static typing.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Heroicons & React Icons:** For beautiful, responsive icons.

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or higher)
- npm or yarn

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/recipe-website.git
cd recipe-website

## Install Dependencies

If you're using npm:

```bash
npm install


## Or if you're using yarn:

yarn install

Running the Project
Start the development server:

If you're using npm:

npm run dev

Or if you're using yarn:

yarn dev

The application will be available at http://localhost:3000.

Build for Production
If you're ready to deploy the project:

If you're using npm:

npm run build
npm run start

Or if you're using yarn:

yarn build
yarn start

```

## Project Structure

- `/app`: Contains the core pages and components of the application.
- `/components`: Reusable components like Hero, CategoryCard, RecipeCard, etc.
- `/data`: Static data files used for categories, recipes, and Instagram posts.
- `/public`: Static assets like images used in the project.
- `/styles`: Global styles and Tailwind CSS configurations.

## Adding New Content

To add new categories, recipes, or Instagram posts:

1. Navigate to the respective file in the `/data` directory.
2. Add your new content following the existing structure.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.
