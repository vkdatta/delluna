export const name="density_large-fill";
export const id="dl_ecb1834303418d02b5f5";
export const url=new URL("../icons/density_large-fill.svg?v=e1d4362fc17c3a4246bd69173feac4e955c421c8aa025e4026c78bce5d309cab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
