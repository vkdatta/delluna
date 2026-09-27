export const name="nest_thermostat-fill";
export const id="dl_8d62336e8362b98817b4";
export const url=new URL("../icons/nest_thermostat-fill.svg?v=05811e72ec995b47b8ecb2cd725c9826a4798393140f2521580843adadd61138",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
