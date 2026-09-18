export const name="offline_pin-fill";
export const id="dl_d13685707da048cdbb9f";
export const url=new URL("../icons/offline_pin-fill.svg?v=eaa6119d8fab4e9aca1ad428fa877b793e97a84a9e6e77f03d239437bf2127ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
