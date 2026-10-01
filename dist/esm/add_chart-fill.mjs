export const name="add_chart-fill";
export const id="dl_b55b451353073591cea7";
export const url=new URL("../icons/add_chart-fill.svg?v=a98be78072780eecc80d8f30eeddc56c3128c347ac3de57b825af960336d9c83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
