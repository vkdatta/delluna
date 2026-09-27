export const name="lucid_3-plane";
export const id="dl_f8b90b0e829e4892a249";
export const url=new URL("../icons/lucid_3-plane.svg?v=66a593485bbdb669f6d49b3bb2199916278815b83dfa10479233d826fc860b93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
