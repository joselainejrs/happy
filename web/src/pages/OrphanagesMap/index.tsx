import React from 'react';
import { Link } from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';

import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import mapImg from '../../images/map-marker.svg';

import './styles.css';

function OrphanagesMap() {
  return (
    <div id="page-orpha">
      <aside>
        <header>
          <img src={mapImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>  
          <strong>São Paulo</strong>
          <span>Carapicuiba</span>
        </footer>
      </aside>

      <Map 
        center={[-23.5474639,-46.8806825]}
        zoom={13}
        style={{ width:'100%', height:'100%'}}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      </Map>


      <Link to="#" className='create-orpha'> 
        <FiPlus  size={32} color='#fff'/>
      </Link>
    </div>
  );
}

export default OrphanagesMap;
