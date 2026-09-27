export const name="sun-fill";
export const id="dl_5b44fb0be25068968c12";
export const url=new URL("../icons/sun-fill.svg?v=0f05937dbaff4fe80aca1d3736ce7e7cae2b2851339eb369569c51a7ed6d5221",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
