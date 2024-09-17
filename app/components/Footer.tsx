export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">betterMe</h3>
            <p className="text-sm">Your AI-powered mental health companion</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-blue-300">About Us</a></li>
              <li><a href="#" className="hover:text-blue-300">How It Works</a></li>
              <li><a href="#" className="hover:text-blue-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-300">Terms of Service</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">support@betterme.com</p>
            <p className="text-sm">1-800-BETTERME</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} betterMe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}