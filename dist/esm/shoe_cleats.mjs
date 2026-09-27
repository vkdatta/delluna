export const name="shoe_cleats";
export const id="dl_cb86537cb228072edec1";
export const url=new URL("../icons/shoe_cleats.svg?v=ddb2104204d16fae844dc88edfcf12c5549be1888ec9c562103593e71877704a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
