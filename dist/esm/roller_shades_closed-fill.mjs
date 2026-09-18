export const name="roller_shades_closed-fill";
export const id="dl_9a3ab7527ec34fe38b87";
export const url=new URL("../icons/roller_shades_closed-fill.svg?v=9bda168dafe90748e59ca7f1d1730370fd00314bcac5bc2b455f273379a762ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
