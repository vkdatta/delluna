export const name="filter_center_focus";
export const id="dl_aeee2400bf7700968622";
export const url=new URL("../icons/filter_center_focus.svg?v=351460e8ba38e9d4c50a837895a8e1cff767b12de5c314847d1861b7a24d3e1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
