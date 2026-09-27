export const name="donut_small-fill";
export const id="dl_33b29fa39e952bf9d05c";
export const url=new URL("../icons/donut_small-fill.svg?v=d9972ec04e57c53d0b6202557943f643488fe42e6bd70bd74781d094d7d8c5dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
