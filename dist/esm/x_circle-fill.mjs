export const name="x_circle-fill";
export const id="dl_5270208cd6cb4e5ab143";
export const url=new URL("../icons/x_circle-fill.svg?v=1befde0eb454ab6d9e10925a93d3b6b30e35ce0cd2cc9ef94e4e4453bff9fa6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
