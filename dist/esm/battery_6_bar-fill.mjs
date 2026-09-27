export const name="battery_6_bar-fill";
export const id="dl_cf9d814ca8d843f207c5";
export const url=new URL("../icons/battery_6_bar-fill.svg?v=4ce38f7b7efd35d8c4dfdb74f43f79639cae5644c248e140592654b2e8486507",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
