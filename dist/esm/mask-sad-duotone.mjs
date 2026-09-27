export const name="mask-sad-duotone";
export const id="dl_9c3bb235682348f3a54e";
export const url=new URL("../icons/mask-sad-duotone.svg?v=37122be65f050c4b18d8000cc9956a0b531a864ba9b87659b548a0fd17f399a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
