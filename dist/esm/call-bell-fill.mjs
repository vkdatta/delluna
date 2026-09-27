export const name="call-bell-fill";
export const id="dl_c8069c63da564a2a915e";
export const url=new URL("../icons/call-bell-fill.svg?v=173fb16cb62483e6d33bf838fe88a754e7f1b377ef7e9d1c16885407f0e0f122",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
