const cassandra = require('cassandra-driver');
const { Uuid } = require('cassandra-driver').types;

const client = new cassandra.Client({ contactPoints: ['127.0.01:9402'], localDataCenter: 'datacenter1', keyspace: 'restaurant_images' });


const getRestaurant = (restaurantId) => {
  const query = 'SELECT * FROM restaurants WHERE r_id = ?';
  return client.execute(query, [restaurantId]);
};

const postRestaurant = (postData) => {
  const randomUuid = Uuid.random();
  const query = 'INSERT INTO restaurants(r_id, i_id, restaurant_name, url, source, picture_date, photographer, name) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const restaurantId = Number(postData.restaurantId.toString().slice(1));
  return client.execute(query, [restaurantId, randomUuid, postData.restaurantId, postData.url, postData.source, postData.date, postData.photographer, postData.name]);
};

const updateRestaurant = (updateData) => {
  const restaurantId = Number(updateData.restaurantId.toString().slice(1));
  const keys = Object.keys(updateData);
  const updates = keys.map((value) => {
    if (value === 'date') {
      return `picture_date = ${updateData[value]}`;
    }
    return `${value} = ${updateData[value]}`;
  });
  const query = `UPDATE restaurants SET ${updates.join(' ')} WHERE r_id = ? AND i_id = ?`;
  return client.execute(query, [restaurantId, updateData.i_id]);
};

const deleteRestaurant = (deleteData) => {
  const restaurantId = Number(updateData.restaurantId.toString().slice(1));
  const query = 'DELETE FROM restaurants where r_id = ? AND i_id = ?';
  return client.execute(query, [restaurantId, deleteData.i_id]);
};

module.exports.getRestaurant = getRestaurant;
module.exports.postRestaurant = postRestaurant;
module.exports.updateRestaurant = updateRestaurant;
module.exports.deleteRestaurant = deleteRestaurant;