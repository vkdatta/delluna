export const name="coffee_maker-fill";
export const id="dl_f4c41166b533559c6726";
export const url=new URL("../icons/coffee_maker-fill.svg?v=3624bf811bdffb7e17c0633f3048152f32b18efe596fed9ac719689384be8cc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
