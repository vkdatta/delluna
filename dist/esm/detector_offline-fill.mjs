export const name="detector_offline-fill";
export const id="dl_1577ee6f63ee80684953";
export const url=new URL("../icons/detector_offline-fill.svg?v=97c32461ab2e855d272197548045f2bcc456265b8147d3597649b10d7c9712ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
