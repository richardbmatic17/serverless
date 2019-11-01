'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};