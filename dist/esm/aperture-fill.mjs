export const name="aperture-fill";
export const id="dl_7babdcf584cb4f5da7c3";
export const url=new URL("../icons/aperture-fill.svg?v=e3a22b66d21e263cebfea45ddc0bf74594565c61ca29a06853ef95fe60e27629",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
