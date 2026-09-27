export const name="engineering";
export const id="dl_6ecbf98a670d739f55e5";
export const url=new URL("../icons/engineering.svg?v=f89bdd7ce2d067c22451528caf5ae59b5ed9774d2ef41eb5224d01e3d66ea3ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
