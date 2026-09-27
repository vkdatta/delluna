export const name="fitness_center-fill";
export const id="dl_c2bd8b6ffebe5c3ed8c7";
export const url=new URL("../icons/fitness_center-fill.svg?v=9b2c59faada86ffbafa2676535ae15f9a474f4a4ef097843eea042abc80afdd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
