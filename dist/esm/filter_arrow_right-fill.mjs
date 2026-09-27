export const name="filter_arrow_right-fill";
export const id="dl_a4d2e7d5fa6c2e09a29d";
export const url=new URL("../icons/filter_arrow_right-fill.svg?v=8ed165747157e3db31c1d1b1ff21c80f3415a7080f455061ed581a2a019e8823",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
