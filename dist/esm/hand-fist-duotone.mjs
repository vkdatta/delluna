export const name="hand-fist-duotone";
export const id="dl_f501a5f14b3d471d9bd4";
export const url=new URL("../icons/hand-fist-duotone.svg?v=a90d766c1a047fb9dceba9293fdd2970c7ab55cfb242a779106ecd23bfe96f1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
