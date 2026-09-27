export const name="wifi_calling_bar_1-fill";
export const id="dl_f16f64b1a1d8738680fd";
export const url=new URL("../icons/wifi_calling_bar_1-fill.svg?v=250c55d475748183d2d814b216226744b1290470fb7e800a4112d18e19934abc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
