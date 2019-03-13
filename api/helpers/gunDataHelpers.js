const knex = require("knex");
const knexConfig = require("../../knexfile");
const db = knex(knexConfig.development);

module.exports = {
  getAllIncidents: function() {
    return db("data");
  },
  getIncidentById: function(id) {
    return db("data")
      .where({ incident_id: id })
      .first();
  },

  getAllIncidentLocations: function() {
    return db("data").select([
      "n_killed",
      "n_injured",
      "latitude",
      "longitude"
    ]);
  },

  getIncidentByState: function(state) {
    return db("data")
      .select([
        "incident_id",
        "date",
        "n_killed",
        "n_injured",
        "latitude",
        "longitude",
        "incident_type"
      ])
      .where({ state: state });
  },

  getIncidentSearch: function(search) {
    return db("data").where({
      incident_id: search.id
    });
  }
};
