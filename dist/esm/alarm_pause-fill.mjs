export const name="alarm_pause-fill";
export const id="dl_22debd422c1e7a36e600";
export const url=new URL("../icons/alarm_pause-fill.svg?v=ece94fe24f99ba195e171241a2442199378f9009c9b528adc709e4f06e0a2289",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
