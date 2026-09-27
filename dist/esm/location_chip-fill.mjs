export const name="location_chip-fill";
export const id="dl_438c552701c5a2da9727";
export const url=new URL("../icons/location_chip-fill.svg?v=d8e1cbac996a524ff9e0d6bfba43ac626e10dd8e73f3a8248888ce78d68dfd64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
