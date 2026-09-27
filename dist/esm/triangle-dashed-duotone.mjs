export const name="triangle-dashed-duotone";
export const id="dl_36bf00f6595e02f708c5";
export const url=new URL("../icons/triangle-dashed-duotone.svg?v=0b44767be3d30abd11e7dbcc28138f8de0c44ce5cff4067894fc95505fa277dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
