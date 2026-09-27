export const name="nordic_walking";
export const id="dl_77c28f4e1994936ce982";
export const url=new URL("../icons/nordic_walking.svg?v=002de112b13029c7a38abc845f1631a93606069a1246f6beb5e30933f4090ced",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
