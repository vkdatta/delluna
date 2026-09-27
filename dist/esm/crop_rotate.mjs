export const name="crop_rotate";
export const id="dl_442279bae79ea00fc24f";
export const url=new URL("../icons/crop_rotate.svg?v=4db4512f9832085877c57872f330b3c0eb4a9bf5c01852bc5475ba4db99bd241",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
