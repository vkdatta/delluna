export const name="format_shapes-fill";
export const id="dl_466bf776b8b54e7abd05";
export const url=new URL("../icons/format_shapes-fill.svg?v=9ae907695f5f1486160ed67e3ac628365afc18b37f9aa72bc154b13348742eda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
