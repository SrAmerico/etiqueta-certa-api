import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class ConservationProcess extends Model {}

ConservationProcess.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, { sequelize, modelName: 'ConservationProcess' });

export default ConservationProcess;
