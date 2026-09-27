export const name="intersect-three-duotone";
export const id="dl_225a54b3212f4c18b0b5";
export const url=new URL("../icons/intersect-three-duotone.svg?v=92ef9576839838bcd02de0f53ebf59bda9fa304f2e3f9783cde13750bec1b284",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
