export const name="intersect-square";
export const id="dl_e8a461fcbf234d81af51";
export const url=new URL("../icons/intersect-square.svg?v=f82857789892230d302bf13c44010d08437b78d15926f350751cbb1a30ef3f08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
