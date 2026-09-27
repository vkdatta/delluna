export const name="text-underline";
export const id="dl_fc8d87a2d48a8a75b19a";
export const url=new URL("../icons/text-underline.svg?v=f89af27924353022a83025f38b937b95ed6cc5f72fe719199000c81633112d5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
