import fondo from "../../assets/fondo.jpg"; 

const Hero = () => {
    return (
        <div style={{ 
            
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${fondo})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '40vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            marginBottom: '0px'
        }}>
             <h1 style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontSize: '3.5rem', 
                marginBottom: '15px',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
            }}>
                El Camino de las Bodegas
            </h1>
            <p style={{ 
                fontFamily: "'Lato', sans-serif", 
                fontSize: '1.2rem', 
                maxWidth: '600px',
                lineHeight: '1.6'
            }}>
                Descubre la esencia de nuestra tierra en cada copa. 
                Una selección exclusiva de los mejores vinos para momentos inolvidables.
            </p>
        </div>
    )
}

export default Hero;