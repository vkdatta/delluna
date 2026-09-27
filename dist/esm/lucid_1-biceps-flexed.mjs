export const name="lucid_1-biceps-flexed";
export const id="dl_b3d6e2ece22a4ea1a31d";
export const url=new URL("../icons/lucid_1-biceps-flexed.svg?v=9950a92d82e2feb0d40c7d7e31227430ca5d4eb2c566c229d3405157cefa75a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
