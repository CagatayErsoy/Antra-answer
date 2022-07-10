/* ~~~~~~~~~~~~~~~~ Api ~~~~~~~~~~~~~~~~ */
export const Api = (() => {
    // const baseUrl = 'https://jsonplaceholder.typicode.com';
    const baseUrl = 'http://localhost:4232';
    const path = 'path';
  
    const getSomething = () =>
      fetch([baseUrl, path].join('/')).then((response) => response.json());
  
    const deleteSomething= (id) =>
      fetch([baseUrl, path, id].join('/'), {
        method: 'DELETE',
      });
  
    const addSomething = (thing) =>
      fetch([baseUrl, path].join('/'), {
        method: 'POST',
        body: JSON.stringify(thing),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json());
  
    return {
      getSomething ,
      deleteSomething,
      addSomething
    };
  })();