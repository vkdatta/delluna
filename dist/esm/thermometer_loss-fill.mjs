export const name="thermometer_loss-fill";
export const id="dl_8df438026306402db8ca";
export const url=new URL("../icons/T/thermometer_loss-fill.svg?v=6b8c7ba1054bbbebbb13ca1746ab45dc344fad1ba98a70088dfad80376773009",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
