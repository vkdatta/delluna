export const name="water_orp";
export const id="dl_5e4ef3cfbae7d4e4a3b6";
export const url=new URL("../icons/water_orp.svg?v=cd23701a2c2a2e6dba0b689086ed07e486f57d47055d0c41d145dab65543b55e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
