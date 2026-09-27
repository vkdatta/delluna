export const name="accessible-fill";
export const id="dl_38dbd2589904e436ed92";
export const url=new URL("../icons/accessible-fill.svg?v=fe0d52f8da5d201da8cdee8fa3c340f1069993461e46e459d4cce0b4d7dde1b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
