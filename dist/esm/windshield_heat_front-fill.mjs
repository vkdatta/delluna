export const name="windshield_heat_front-fill";
export const id="dl_7715213b3a632473deab";
export const url=new URL("../icons/windshield_heat_front-fill.svg?v=dd332d3cba696156ce916146bcd3617e6694888edf36a58cd2522b1597f6e33c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
