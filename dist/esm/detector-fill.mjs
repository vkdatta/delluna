export const name="detector-fill";
export const id="dl_2fd0bf995ad3e29c1dba";
export const url=new URL("../icons/detector-fill.svg?v=96084b924d3772d3c94ed45ea3191496425a7cd10a299f5e4f43b2bb472376f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
