export const name="drag_indicator-fill";
export const id="dl_b6edfd07580387ea900f";
export const url=new URL("../icons/drag_indicator-fill.svg?v=d69de748fde3025c2af6944b8953672d9aa022ea5a5158ba88671df545a5413a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
