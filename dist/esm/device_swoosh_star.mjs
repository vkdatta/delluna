export const name="device_swoosh_star";
export const id="dl_02d8514a9b3075606047";
export const url=new URL("../icons/device_swoosh_star.svg?v=4809267f0c576c712051d15263c20f1850f273649fbbb256eb76f99929c22a49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
