export const name="panorama_wide_angle-fill";
export const id="dl_edadc6a3e41b499d86bd";
export const url=new URL("../icons/P/panorama_wide_angle-fill.svg?v=c23d22f982fe8e26f83bf32f6d7a3ec9780a0bc6a1b351f80e2d5f22c7d36983",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
