export const name="crosshair-duotone";
export const id="dl_c3887d538a824b7aadfc";
export const url=new URL("../icons/crosshair-duotone.svg?v=06db48006efdc1d20c5c77963ac266d5cf1bcedd022843dc0f906a6c6cb10063",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
