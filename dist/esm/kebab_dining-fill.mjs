export const name="kebab_dining-fill";
export const id="dl_b03157dd5fbd2d71d5ad";
export const url=new URL("../icons/kebab_dining-fill.svg?v=ebf90f1b2501d13d0fec8d3e0413398076f9199021138f02d3386b805a662549",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
