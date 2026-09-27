export const name="tiktok-logo-light";
export const id="dl_b04af165ca545328bb36";
export const url=new URL("../icons/tiktok-logo-light.svg?v=92e75ba3976c0c0487af9f3a2394036ee3bc52f4489f0efe91c84229094ac673",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
