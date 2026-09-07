export const name="pepper";
export const id="dl_1e79300e29474e29ae15";
export const url=new URL("../icons/pepper.svg?v=f6386d66293ab3ab165f39e80fe4276874aaaca067e330d83c347d3f8980d5f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
