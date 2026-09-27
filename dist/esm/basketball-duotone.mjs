export const name="basketball-duotone";
export const id="dl_12a13cb8341848988023";
export const url=new URL("../icons/basketball-duotone.svg?v=7ebc42e20ae1c22a54cfb0f5187a304593592e47ec34953e1562d64097d2a7d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
