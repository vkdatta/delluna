export const name="hourglass";
export const id="dl_fd8cb74a330b48ca84a3";
export const url=new URL("../icons/hourglass.svg?v=655d8eaa7c2994230e3994d0823121d621ecff24ce8e41ad8481e302c3bf190b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
