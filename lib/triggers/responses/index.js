/**
 * Trigger handler
 *
 * @param {object} plg - Pluga developer platform toolbox.
 * @param {object} plg.axios - [axios](https://github.com/axios/axios)
 *
 * @param {object} event - Event bundle to handle.
 * @param {object} event.meta - Pluga event meta data.
 * @param {number} event.meta.lastReqAt - Last task handle timestamp.
 * @param {object} event.auth - Your app.json auth fields.
 * @param {object} event.input - Your meta.json configuration fields.
 *
 * @returns {Promise} Promise object represents an array of resources to handle.
 */
exports.handle = function (plg, event) {
  return plg.axios({
      method: 'GET',
      url: `${event.auth.uri}/forms/${event.input.formId}/responses`,
      headers: {
        Authorization: `Bearer ${event.auth.accessToken}`
      },
      params: {
        since: event.meta.lastReqAt
      }
  }).then((response) => {
    return response.data.items.map((item) => {
      const fields = item.hidden;

      (item.answers || []).forEach((answer) => {
        fields[answer.field.id] = answer.text;
      });

      fields.score = item.calculated.score;
      fields.submitted_at = item.submitted_at;
      fields.landing_id = item.landing_id;

      return fields;
    });
  });
};
