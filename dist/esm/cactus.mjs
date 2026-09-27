export const name="cactus";
export const id="dl_bcc19d53df6a4347a1d6";
export const url=new URL("../icons/cactus.svg?v=76f64a03e8d81bbfd4e163fa0897976c06d0578d79e374d00c65f6335e8f91c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
