import '../assets/css/App.css'
import '../assets/css/style.css'
import '../assets/vendor/animate.css/animate.min.css'
import '../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../assets/vendor/boxicons/css/boxicons.min.css'
import '../assets/vendor/glightbox/css/glightbox.min.css'
import '../assets/vendor/swiper/swiper-bundle.min.css'
import AppRouter from './AppRouter'

function App() {
  return (
    <div className='container-fluid'>
      <AppRouter/>
    </div>
  );
}

export default App;
