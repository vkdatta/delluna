export const name="intersect-three";
export const id="dl_4544db3f81004c57bee9";
export const url=new URL("../icons/intersect-three.svg?v=43d66e8e042ddc10d4c189f61ead452fcbc231cd8e6f005f1d7b99ce6ab8b23c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
