export const name="globe-stand-fill";
export const id="dl_a20c84183cc14afd9a24";
export const url=new URL("../icons/globe-stand-fill.svg?v=56be295d172b4c726efc11dc61dca404989cd01adf5e8c3ce829692395fd0c93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
