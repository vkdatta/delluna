export const name="font_download_off-fill";
export const id="dl_407d463fc05013467819";
export const url=new URL("../icons/font_download_off-fill.svg?v=5c1f30189c49d49494772f74bcdb7521dc50fde7e891957726d2084afa60083c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
