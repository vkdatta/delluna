export const name="funnel-fill";
export const id="dl_902763ea3f874b7da46b";
export const url=new URL("../icons/funnel-fill.svg?v=e07dfd151144c2209ab00b23555d3e2cf9fd4270d75789d0c74fd6d3899b7e4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
