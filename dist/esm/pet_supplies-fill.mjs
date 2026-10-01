export const name="pet_supplies-fill";
export const id="dl_5a1f3f1ab7ce1699885f";
export const url=new URL("../icons/pet_supplies-fill.svg?v=88ccc3337b10cc117b79bdf0f37553d36bf35abb4c7a6d98baf4f1a3489ce284",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
