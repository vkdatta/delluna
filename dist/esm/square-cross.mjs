export const name="square-cross";
export const id="dl_2d021d7eb11476e3c49f";
export const url=new URL("../icons/square-cross.svg?v=fe336e7acdaa1458284b79b6ae8e69863676635c606d35ab40a8fd271457ccc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
