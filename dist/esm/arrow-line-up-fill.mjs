export const name="arrow-line-up-fill";
export const id="dl_cda162d456264d399575";
export const url=new URL("../icons/arrow-line-up-fill.svg?v=b361341c0a9ddc300b11ee04edb1bd4541545298a3544d0568656ed43a361aa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
