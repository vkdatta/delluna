export const name="automation-fill";
export const id="dl_15820f46e882272fcc46";
export const url=new URL("../icons/automation-fill.svg?v=184c1425abd1e52e62a8db5ddfbcdb0cb9655e2681ce2e0a6999c59e7445732a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
