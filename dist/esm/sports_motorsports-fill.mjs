export const name="sports_motorsports-fill";
export const id="dl_c12b43a5c35b05a4adc3";
export const url=new URL("../icons/sports_motorsports-fill.svg?v=3c6ac7d3c59495ecac85785f543682123fcca02d2b16a9d6399f24b8f14db279",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
