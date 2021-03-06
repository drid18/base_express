const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return activity.init(sequelize, DataTypes);
}

class activity extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    req_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    req_param: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    res_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    res_body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    method: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'activity',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "activity_id_IDX",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return activity;
  }
}
