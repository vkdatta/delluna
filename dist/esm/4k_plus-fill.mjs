export const name="4k_plus-fill";
export const id="dl_1a3d222567db440e8375";
export const url=new URL("../icons/4k_plus-fill.svg?v=b42d0daf9be499a0640db936c4d2f20764cc2a4139f4cadb031810a6670fbabc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
