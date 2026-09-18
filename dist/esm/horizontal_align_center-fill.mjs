export const name="horizontal_align_center-fill";
export const id="dl_4e348f77cd8c4f0892c4";
export const url=new URL("../icons/horizontal_align_center-fill.svg?v=d09e0bcb24fc2066d147cfd894e6672040e6f298b8825ff6240f051a90022f38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
