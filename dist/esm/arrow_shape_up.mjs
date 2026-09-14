export const name="arrow_shape_up";
export const id="dl_6bc2a09530e54c46807b";
export const url=new URL("../icons/A/arrow_shape_up.svg?v=f0d40de75853df24c7a5554531acca579b375bc52e4d2ca56001ddfc5d9df88e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
