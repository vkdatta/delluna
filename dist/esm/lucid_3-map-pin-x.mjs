export const name="lucid_3-map-pin-x";
export const id="dl_70381fb2553242c090bc";
export const url=new URL("../icons/lucid_3-map-pin-x.svg?v=11c99734eb69c480ea01c8c8949df1f77413f7b22224226b18fd492649810297",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
