export const name="x-square-duotone";
export const id="dl_cf2008ce2f7c4b0e9693";
export const url=new URL("../icons/X/x-square-duotone.svg?v=ad1a50812237280f0c1eb793aff8b545d92b3a5075e33ed92ee62a1430488db9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
