export const name="hand-coins-duotone";
export const id="dl_28af178fc76249ba989f";
export const url=new URL("../icons/hand-coins-duotone.svg?v=df25244de895848f962a299d9c1ebc64d1026cc499765788027c79da9d039d9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
