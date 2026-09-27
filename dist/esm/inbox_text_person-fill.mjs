export const name="inbox_text_person-fill";
export const id="dl_a1637e46f0ff5fc7ae45";
export const url=new URL("../icons/inbox_text_person-fill.svg?v=73641a1cdab7bb36c7f330227ad7dbc5e69a156a04c1453070c044166d009adc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
