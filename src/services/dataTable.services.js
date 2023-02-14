class DataTableServices {
    add(data) {
        // api call
        // receive response
        // attach the response to the table
        var new_data = []
        new_data.push(data)
        return new_data;
    }

    remove(data, dt) {
        dt.rows({ selected: true }).every(function () {
            let idx = data.value.indexOf(this.data());
            data.value.splice(idx, 1);
        });

        return data;
    }

    update(data,dt) {
        let result = dt.rows({ selected: true }).every(function () {
            console.log(data);
          let row = this.data();
          row.name += ' Updated';
          row.office += ' Updated';
          row.position += ' Updated';
          row.exten += 'Updated';
        });

        return result;
      }
}

export default new DataTableServices();