export const name="boat_bus";
export const id="dl_a838338e81256fbeeb5d";
export const url=new URL("../icons/boat_bus.svg?v=ef84dcde76cdd940da55464b7d1f9d8478d71af2ac5e0dd7508da9ff0b060338",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
