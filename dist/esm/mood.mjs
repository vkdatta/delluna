export const name="mood";
export const id="dl_cf293dec761b9fcba038";
export const url=new URL("../icons/mood.svg?v=47ca6ff7882249913b836b9ee4e690af3f46abc2c4950bb62fd6d8d365598726",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
