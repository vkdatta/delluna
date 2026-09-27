export const name="tidal-logo-bold";
export const id="dl_fbda8a05224e41e55db5";
export const url=new URL("../icons/tidal-logo-bold.svg?v=86ce6ded780587ab54fafb0651a5d65defa5e2ab029a95ebadd3620aadfeba20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
