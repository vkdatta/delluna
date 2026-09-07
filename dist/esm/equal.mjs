export const name="equal";
export const id="dl_6a7bfa7bd63842c6ae5e";
export const url=new URL("../icons/all_60_named_svgs/equal.svg?v=47527944b9283c4d575c569e5c03ae0fd86ebc9a8ff442a76de067f7adc3018f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
