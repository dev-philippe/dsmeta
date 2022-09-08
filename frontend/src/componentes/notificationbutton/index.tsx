
import icon from '../../Asserts/img/notification-icon.svg';

import './styles.css';

function notificationbutton() {
  return (
    <div className="dsmeta-red-btn">
      <img src={icon} alt="Notificar" />
    </div>
  )
}

export default notificationbutton;
