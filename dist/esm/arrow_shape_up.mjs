export const name="arrow_shape_up";
export const id="dl_be9a78a883c1e6746f1c";
export const url=new URL("../icons/arrow_shape_up.svg?v=f0d40de75853df24c7a5554531acca579b375bc52e4d2ca56001ddfc5d9df88e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
