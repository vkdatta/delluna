export const name="lucid_2-crown";
export const id="dl_814b15d2672841dfb73e";
export const url=new URL("../icons/lucid_2-crown.svg?v=3925431a0650fc4a3e666fe0237befefb4be7f3952c133aa68a34e1376e93f0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
