export const name="stamp-thin";
export const id="dl_eac33ee2c8bdd1dce71f";
export const url=new URL("../icons/stamp-thin.svg?v=20f50652d43abe40173cd9d207bc7ace1c2277a732fb2c715a2d136b2104187f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
