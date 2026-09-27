export const name="filter_drama-fill";
export const id="dl_fc4d1f0f21da60a902ff";
export const url=new URL("../icons/filter_drama-fill.svg?v=43d48575ea57b1784f1086963bbb476b38e2f6db87f54f9a12fa8be70994bd9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
