export const name="arrows-clockwise-fill";
export const id="dl_7ffe049cb13a43d19636";
export const url=new URL("../icons/arrows-clockwise-fill.svg?v=ee5fae7fd4b418cbe723c5736889f57310b101af9134cfd6d688b9b9d5a03ff6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
