export const name="lucid_3-spade";
export const id="dl_0d5a860776a74001ac25";
export const url=new URL("../icons/lucid_3-spade.svg?v=8e2ded07fe264ceb48f43e45e4dbf90ddf744d3a8c6ab9cc7779c0ec467d38f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
