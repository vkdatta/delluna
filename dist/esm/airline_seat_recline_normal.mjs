export const name="airline_seat_recline_normal";
export const id="dl_c4986ae30eb25fc32b57";
export const url=new URL("../icons/airline_seat_recline_normal.svg?v=a7c2ff86ad9491f58a95f14f81f0a8510a0923af717604a92e22bc71f589722a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
