export const name="gas_meter-fill";
export const id="dl_bd224ec189b67bd8dbc4";
export const url=new URL("../icons/gas_meter-fill.svg?v=3c49e63668659e5730a309307a8fd2551fcc1b9bc1e8c748fbaf7f503019b3be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
