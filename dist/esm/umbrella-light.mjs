export const name="umbrella-light";
export const id="dl_3ef78e3d0c484a61927f";
export const url=new URL("../icons/U/umbrella-light.svg?v=0564f9b200e63e6eedcd7d38f1593bc3589357e49ec6cb279cab394f906123f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
