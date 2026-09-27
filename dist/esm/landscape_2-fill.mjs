export const name="landscape_2-fill";
export const id="dl_128f4abc936ca700ea06";
export const url=new URL("../icons/landscape_2-fill.svg?v=61ef203adba51c5486d385309105c039ee04288749ee2e6f00642fe4d3e9b58a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
