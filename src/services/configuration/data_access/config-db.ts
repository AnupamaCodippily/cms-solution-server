interface IConnection {
  connection: any;
}

export default function makeConfigTable({ connection }: IConnection) {
  return {
    fetchConfiguration,
    updateConfiguration,
    resetConfiguration,
    removeConfiguration,
  };

  async function fetchConfiguration() {
    connection.query(
      "SELECT $1::text as message",
      ["Hello world!"],
      (err: any, res: any) => {
        if (!err) {
          // tslint:disable-next-line:no-console
          console.log(res.rows[0].message);
        }
        connection.end();
      }
    );
  }

  async function updateConfiguration() {
    connection.query(
        "SELECT $1::text as message",
        ["Hello world!"],
        (err: any, res: any) => {
          if (!err) {
            // tslint:disable-next-line:no-console
            console.log(res.rows[0].message);
          }
          connection.end();
        }
      );
  }

  async function resetConfiguration() {connection.query(
    "SELECT $1::text as message",
    ["Hello world!"],
    (err: any, res: any) => {
      if (!err) {
        // tslint:disable-next-line:no-console
        console.log(res.rows[0].message);
      }
      connection.end();
    }
  );}

  async function removeConfiguration() {
    connection.query(
        "SELECT $1::text as message",
        ["Hello world!"],
        (err: any, res: any) => {
          if (!err) {
            // tslint:disable-next-line:no-console
            console.log(res.rows[0].message);
          }
          connection.end();
        }
      );
  }
}
