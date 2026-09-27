export const name="hide_source";
export const id="dl_f393454113988e7806d1";
export const url=new URL("../icons/hide_source.svg?v=46ee2e6d2cb78d218e429072e97bbd3ccfa07839823b704b80769051a7ca00d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
