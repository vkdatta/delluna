export const name="lucid_3-square-arrow-right";
export const id="dl_ffb095a64bdf4caa92b7";
export const url=new URL("../icons/lucid_3-square-arrow-right.svg?v=4afecf22ddf971c39d6cff8924a8e1096744b4729377236179e80e242926263a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
