export const name="folder-star-light";
export const id="dl_b5c43f3677e1485f98b4";
export const url=new URL("../icons/folder-star-light.svg?v=b1de3f02acd6f62839e6af8f5b05c3dc9dfe0f6e51e3c179bb2d041cb1d71913",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
