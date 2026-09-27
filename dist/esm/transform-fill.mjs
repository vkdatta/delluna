export const name="transform-fill";
export const id="dl_437cdc40648fbc898cc9";
export const url=new URL("../icons/transform-fill.svg?v=2bd96f28150815b3d63ddc07be990e280a312557dcdc8043a53aaf943128bb5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
