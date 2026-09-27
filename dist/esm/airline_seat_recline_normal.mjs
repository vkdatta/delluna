export const name="airline_seat_recline_normal";
export const id="dl_8545d684f879127c8e05";
export const url=new URL("../icons/airline_seat_recline_normal.svg?v=17ca1c53f0138c57b7bb80233ee40893170c255c7f9fea4b5139ef361e1018c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
