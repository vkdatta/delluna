export const name="speaker-hifi-duotone";
export const id="dl_145a10975aa0a9c43ffb";
export const url=new URL("../icons/speaker-hifi-duotone.svg?v=20fd827afa23c4999330665aa739a9c8eb410433a4a4bb4f14633432c73de501",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
