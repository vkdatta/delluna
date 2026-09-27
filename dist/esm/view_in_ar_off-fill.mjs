export const name="view_in_ar_off-fill";
export const id="dl_16e27527d598b324f25e";
export const url=new URL("../icons/view_in_ar_off-fill.svg?v=1121454bd061a744486ef5170120aaed38f0f762a0e660fa8bd2bafa52196cbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
