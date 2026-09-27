export const name="carry_on_bag_checked-fill";
export const id="dl_b0b4f5de0b0ced27c68b";
export const url=new URL("../icons/carry_on_bag_checked-fill.svg?v=6214e479afd8a6e97099dcdb35e9a581ed2351b04f06be8f24d426deab6edfbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
