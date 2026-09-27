export const name="battery-vertical-low";
export const id="dl_2d2c5eb617df4c6292a9";
export const url=new URL("../icons/battery-vertical-low.svg?v=6d7c5387ab232612ac080c01d4d8c0cec3b414cf77477d9bca6c704c049e232b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
