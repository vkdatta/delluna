export const name="bandaids";
export const id="dl_83c03e3dd8de42079cd8";
export const url=new URL("../icons/bandaids.svg?v=2b7a63fdf642ae5669152fb52a93255a664f87079c7dc3134ee47e7752e8c364",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
