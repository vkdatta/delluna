export const name="nest_farsight_weather-fill";
export const id="dl_5669a819ea2521a6bdfa";
export const url=new URL("../icons/nest_farsight_weather-fill.svg?v=6b0a5e986cb9626b056da91d40b8cd5b50051cd575cb1e0b288d5fafb07ebd08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
