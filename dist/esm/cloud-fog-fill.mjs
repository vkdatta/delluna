export const name="cloud-fog-fill";
export const id="dl_d33db3d5847a496b8aa8";
export const url=new URL("../icons/cloud-fog-fill.svg?v=c0580f6ab42abcade5e7fbe940d12f5f66388ac0c36032247be7b292e3917f94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
