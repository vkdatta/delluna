export const name="moving_beds";
export const id="dl_f575ce7a907344b7aa6c";
export const url=new URL("../icons/M/moving_beds.svg?v=1873c7f7f56061052b167632c9011eeb2679558c0582fa4416abec2b7003327a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
