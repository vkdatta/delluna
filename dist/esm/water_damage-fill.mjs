export const name="water_damage-fill";
export const id="dl_e981a3e2b952e446d77d";
export const url=new URL("../icons/water_damage-fill.svg?v=334587f3e988186eb37ba1868087aaf863bfbdc2a7d03dec93eb1567b8a2e232",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
