import './Styles/Home.css'

const Home = () => {
  return (
    <div className='wrapperHome'>
      <div className='logoHolder'>
        <img
          src={require('../assets/logo.png')}
          alt='logo Sos jeunes pousses'
        />
      </div>
      <div className='wrapRaw'>
        <h1>
          Les mêmes chances pour tous <br />
          Découvrez ...
        </h1>
        <div className='splitWrap'>
          <div className='splitOrange'>
            <div className='holderBtn'>
              <h2>Première Visite ?</h2>
              <button> Commencer</button>
            </div>
            <div className='holderSearchBar'>
              <h2>Tu connais la plate-forme ?</h2>
              <div className='SearchBar'>
                <input
                  type='text'
                  name='searchBar'
                  placeholder='Rechercher'
                ></input>

                <select name='citySelect' id='citySelect'>
                  <option value='' disabled selected hidden>
                    Ville
                  </option>
                  <option value='Grenoble'>Grenoble</option>
                  <option value='Paris'>Paris</option>
                </select>
                <select name='catSelect' id='catSelect'>
                  <option value='' disabled selected hidden>
                    Catégories
                  </option>
                  <option value='Grenoble'>Jeunesse</option>
                  <option value='Pré-incubation'>Pré-incubation</option>
                  <option value='Ideation'>Ideation</option>
                  <option value='Amorçage'>Amorçage</option>
                  <option value='Outils de gestions'>Outils de gestions</option>
                </select>
              </div>
              <button> Chercher</button>
            </div>
          </div>
          <div className='splitGreen'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
