export const name="coat-hanger-fill";
export const id="dl_c751c4d6b5304d96a7a8";
export const url=new URL("../icons/coat-hanger-fill.svg?v=43a730e8fcf491dffc71013cfb004b12184a8da846f1dc72131c0e32ee40c8a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
