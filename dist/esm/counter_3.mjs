export const name="counter_3";
export const id="dl_47ccb8d3aeb14710916f";
export const url=new URL("../icons/counter_3.svg?v=ab21a931efd01b22032c95b56b9bef635a3d446f0ef543e7a926f8c36d7546a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
