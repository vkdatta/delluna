export const name="dots-three-outline-vertical-bold";
export const id="dl_e96ae3f0d80c43f89431";
export const url=new URL("../icons/dots-three-outline-vertical-bold.svg?v=5209d7cca7a9652cc68d3da4a30086cce2d0979e429a8dae29bc82a5ea3a4b86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
