export const getLastTickets = async () => {
    const resp = await fetch('http://localhost:4000/ultimos');
    const data = await resp.json();
    // console.log(data);
    return data.last;
}