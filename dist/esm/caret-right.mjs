export const name="caret-right";
export const id="dl_fe56bb78f99848e78d29";
export const url=new URL("../icons/caret-right.svg?v=e6dec01e074807965b7f3146b976a9b5e82c31d9c2c88aeb52e77cc2ab16c1d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
