export const name="plug-charging";
export const id="dl_f0f1ace1c6f04080971a";
export const url=new URL("../icons/plug-charging.svg?v=6b920acb4397ee6d5652b5c663b5c00c84f6bfa94ab09850ba08db8491031c8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
