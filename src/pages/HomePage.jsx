import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
      <p className="text-xl mb-6">
        This is a simple, customizable web application. Feel free to modify and build upon it!
      </p>
      <Button size="lg">Get Started</Button>
    </div>
  );
};

export default HomePage;