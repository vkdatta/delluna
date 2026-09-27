export const name="barcode_reader";
export const id="dl_c4ea98631808eb0741eb";
export const url=new URL("../icons/barcode_reader.svg?v=04661f4f0aa2d51ff527159438d3878255c43b33b37565f04a42d9bbbd8acec1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
