export const name="bath_private-fill";
export const id="dl_da7b3b08e92b915f73bd";
export const url=new URL("../icons/bath_private-fill.svg?v=a1ff05db0e587280b705c227d88a0e8553098e704a2a5e38449cfe3d1204fa23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
