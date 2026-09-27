export const name="line-segments-duotone";
export const id="dl_d5cd66d7702b41e9bf34";
export const url=new URL("../icons/line-segments-duotone.svg?v=f3ea658bcbc741ebdb6351e405c9a6bed5a833c70d3b2e0bfc4ef6d4766eb570",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
