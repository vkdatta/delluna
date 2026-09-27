export const name="folder_data-fill";
export const id="dl_61e360c47b0c8d00fde3";
export const url=new URL("../icons/folder_data-fill.svg?v=cd950f04b3e53f55e7ea1f14c8b116952134d2e4247c19e1d62a66cfedfd1f3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
