export const name="mp";
export const id="dl_8b3fd3b2df504c953aeb";
export const url=new URL("../icons/mp.svg?v=2810c51fa5bd897d5e811f1a6f384f92be79e382bef2bd391f6b88accbf2c025",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
