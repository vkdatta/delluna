export const name="allergies-fill";
export const id="dl_c49837895fd843d58a65";
export const url=new URL("../icons/allergies-fill.svg?v=aeaa6d1f4aeb9d8ccbe1bfff2e9c52b9b1eb11adbd814792c1e0e7697fbe90e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
