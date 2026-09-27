export const name="windmill-duotone";
export const id="dl_20860a1d1bd5c78e95cc";
export const url=new URL("../icons/windmill-duotone.svg?v=6c6d0639529e69d669d6b83c791bcfff8176f3aff71b30f140ae4444e71a97b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
