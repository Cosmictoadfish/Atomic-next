Atomic Design System – Next.js + Tailwind CSS

This project implements an Atomic Design Architecture using Next.js, TypeScript, Tailwind CSS, and Storybook.
It provides a scalable, reusable, and maintainable structure for building modern UI components.

 Project Structure 
Folder / File	Purpose
/app/page.tsx	Main Next.js page assemble all atomic components.
/app/globals.css	Global styles using Tailwind CSS.
/components/atoms/Button.tsx	Reusable button with Tailwind styling and hover effects.
/components/atoms/Input.tsx	Styled input field for text entry.
/components/atoms/Text.tsx	Basic text component for consistent typography.
/components/atoms/index.ts	Central export for all atom components.
/components/molecules/SearchBar.tsx	Combines Input + Button for reusable search functionality.
/components/molecules/index.ts	Central export for all molecule components.
/components/organisms/Navbar.tsx	Navigation bar combining logo and nav links.
/components/organisms/CardGrid.tsx	Displays a grid of cards (molecules).
/components/templates/MainLayout.tsx	Page layout wrapper including Navbar and child content.
/.storybook/main.ts	Storybook configuration entry.
/.storybook/preview.ts	Global Storybook settings and parameters.
/components/atoms/Button.stories.tsx	Storybook story for Button atom.
/components/molecules/SearchBar.stories.tsx	Storybook story for SearchBar molecule.
/README.md	Project overview and documentation.

1. Atoms

Smallest, single-purpose components that cannot be broken down further.
Examples:

Button, Input, and Text

2. Molecules

Combinations of atoms that work together as functional units.
Examples:
SearchBar = Input + Button
Card = Image + Text + Button

3. Organisms

Complex UI sections composed of multiple molecules and atoms.
Examples: Navbar and CardGrid

4. Templates

Reusable page-level layouts defining structure and hierarchy.
Examples: MainLayout which wraps Navbar + content

5. Pages

Concrete implementation of templates with real content.
Examples: Home Page (page.tsx)

Storybook Integration
Storybook provides isolated visual testing for all atomic components.
Run Storybook with: npm run storybook

Each atom/molecule has a .stories.tsx file under its folder.
Example: components/atoms/Button.stories.tsx and components/molecules/SearchBar.stories.tsx
This enables you to preview, test, and document component behavior.

 Tool               Purpose                                         
 ----------------- | ----------
 Next.js           | React framework for full-stack apps             
 Tailwind CSS      | Utility-first styling                           
 TypeScript        | Strong typing and maintainable code             
 Storybook         | UI documentation and isolated component testing 
 Atomic Design     | Scalable and reusable UI architecture  




 Getting Started

Install dependencies : npm install

Run the development server: npm run dev

Launch Storybook : npm run storybook

The goal of this project is to create a modular, reusable, and testable UI system where every component can be visualized, tested, and documented independently.
By using Atomic Design + Storybook, we achieve:

Better component reusability

Faster UI iteration

Consistent design system

Easier team collaboration.
