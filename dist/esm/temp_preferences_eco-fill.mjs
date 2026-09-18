export const name="temp_preferences_eco-fill";
export const id="dl_d98a775f770d472cad64";
export const url=new URL("../icons/T/temp_preferences_eco-fill.svg?v=d2d817bd65da4c569f1c9e7121135bb824d21a79eca7525a60aaab4e4b90161f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
