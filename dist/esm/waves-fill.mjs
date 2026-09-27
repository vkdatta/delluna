export const name="waves-fill";
export const id="dl_d3526dfd7512f29b417a";
export const url=new URL("../icons/waves-fill.svg?v=346dba875ebf35ff131e66b3dc2312b332357de1d552f84149dc870ac4fc1785",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
