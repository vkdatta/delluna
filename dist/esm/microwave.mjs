export const name="microwave";
export const id="dl_2f0abd6acd735708815b";
export const url=new URL("../icons/microwave.svg?v=6c8defd1a059288211735bc4cdc7125a5de87377eac890e1b156d2ff958d535e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
