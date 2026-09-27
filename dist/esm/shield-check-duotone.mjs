export const name="shield-check-duotone";
export const id="dl_170f82227eecc1538828";
export const url=new URL("../icons/shield-check-duotone.svg?v=8cff41cf24dfc555037141d7ad6d60eb934f911cf378262d25c572afa33e1d82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
