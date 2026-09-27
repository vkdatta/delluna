export const name="airline_seat_flat-fill";
export const id="dl_0737d0ef0ad605a87e3f";
export const url=new URL("../icons/airline_seat_flat-fill.svg?v=f05c46b271d9e2eee8c4a29951f20f82dd9e7f22eb721af4c5ed37901cb3bcf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
