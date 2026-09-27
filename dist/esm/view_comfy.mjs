export const name="view_comfy";
export const id="dl_4f570167d7f1b9d3fccc";
export const url=new URL("../icons/view_comfy.svg?v=0c6b3c1a767aa85a986d1dce44abadd373522276dbd3101a733a7cd383f7404f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
