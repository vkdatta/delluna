export const name="filter_alt_off";
export const id="dl_bc2c8155c7a2a66f08cd";
export const url=new URL("../icons/filter_alt_off.svg?v=4f9e73602d04ead7d8023a571d713f8b46a462e7ac48d565e27beabfc503aa9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
