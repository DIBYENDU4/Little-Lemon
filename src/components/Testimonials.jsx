import Person1 from "./Images/1.jpg"
import Person2 from "./Images/2.jpg"
import Person3 from "./Images/3.jpg"
import Person4 from "./Images/4.jpg"

function Testimonials () {
    return(
        <>
            <div className="Testimonials">
                <div className="TestimonialsHeading">
                    <h2>Testimonials</h2>
                </div>
                <div className="Profiles "> 
                    <div className="Profile">
                        <h3>Karla</h3>
                        <div className="PersonImage Image"><img className="ProfilePicture Image"  src={Person1} /></div>
                        <div className="StarRating">⭐⭐⭐⭐⭐</div>
                        <p>"Their brunch is awesome, I love the avocado toast and the California focaccia. Pizza is really good as well. – Naveen Bara"</p>
                    </div>

                    <div className="Profile">
                        <h3>Anna</h3>
                        <div className="PersonImage Image"><img className="ProfilePicture Image"  src={Person2} /></div>
                        <div className="StarRating">⭐⭐⭐⭐</div>
                        <p>"This is always our breakfast stop before heading home from vacation. Always delicious. Always great service. Always worth the stop. – Satyam Bhargav"</p>
                    </div>

                    <div className="Profile">
                        <h3>Lena</h3>
                        <div className="PersonImage Image "><img className="ProfilePicture Image "  src={Person3} /></div>
                        <div className="StarRating">⭐⭐⭐⭐⭐</div>
                        <p>"One of the best places I’ve eaten on Cape Cod. Great cocktails, awesome. – Shivanshu Mishra"</p>
                    </div>
                    
                    <div className="Profile">
                        <h3>Lena</h3>
                        <div className="PersonImage Image "><img className="ProfilePicture Image "  src={Person4} /></div>
                        <div className="StarRating">⭐⭐⭐⭐⭐</div>
                        <p>"The absolute best red sauce. Weather on Pizza or Pasta, it’s honestly delicious. Portions are huge and the staff is extremely friendly and courteous. – Soham Shendre"</p>
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default Testimonials;