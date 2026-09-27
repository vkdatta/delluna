export const name="lucid_3-spade";
export const id="dl_0d5a860776a74001ac25";
export const url=new URL("../icons/lucid_3-spade.svg?v=ad4e5df61ba88512596908fc2c51e97da50534d1aef8f20d6846652773bdc173",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
