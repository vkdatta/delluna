export const name="recycle-light";
export const id="dl_a221c619eaee4941bd19";
export const url=new URL("../icons/recycle-light.svg?v=bcb286f718b34f5ce930ac8981d44f87b84f17583aed91a6b2bc673b031dbd3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
