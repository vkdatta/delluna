export const name="crop_landscape-fill";
export const id="dl_0fe1eefd801e41a6ba28";
export const url=new URL("../icons/C/crop_landscape-fill.svg?v=96d2f1cc81949c6759d7f39a92c168847715431e4f558b000b9a715ec059c96f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
