export const name="scales-duotone";
export const id="dl_528295701c8384448905";
export const url=new URL("../icons/scales-duotone.svg?v=cd2c78f3ecd2a9f318dc2bd5a9d90f43140624a650aceed6851b0c4ecfcdbc7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
