export const name="user-star";
export const id="dl_933018c9ed7841a49ef3";
export const url=new URL("../icons/user-star.svg?v=e0f15fa358ce894c0a4c41fb00663a7595eff027b879f9021d31f6802ca55be4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
