export const name="blinds_2-fill";
export const id="dl_f3f74ba0ddc447939219";
export const url=new URL("../icons/B/blinds_2-fill.svg?v=eb3488f160cdd7fdf07994d5ee9349b31a98e815c644e32acce2524ad2047bde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
