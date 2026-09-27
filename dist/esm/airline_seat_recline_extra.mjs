export const name="airline_seat_recline_extra";
export const id="dl_4746db8f2207320c44d7";
export const url=new URL("../icons/airline_seat_recline_extra.svg?v=b1a2aacff133e0ab47ca066e1b9e0d3887d705c2f6e37088c6d94492ef7bb6ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
