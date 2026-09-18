export const name="iron-fill";
export const id="dl_71316ffe261e4e8fb334";
export const url=new URL("../icons/I/iron-fill.svg?v=f95e89564d01572e71c9d467a60bbc7ee6289d29982d3a09746422e9df5de978",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
