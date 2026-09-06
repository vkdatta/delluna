export const name="placeholder-bold";
export const id="dl_ca252ce5880b447a8b96";
export const url=new URL("../icons/placeholder-bold.svg?v=31c19ebd8536aa880b1c73f4215eaba4be8a308127b00330f18285909ee0513b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
