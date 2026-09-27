export const name="luggage-fill";
export const id="dl_3fbdd0bf6745811c9862";
export const url=new URL("../icons/luggage-fill.svg?v=6f8b5bf6328378413557fad969ed824471877aa4d0fbb3e177e366dffba7a89a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
