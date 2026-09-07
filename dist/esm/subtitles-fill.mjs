export const name="subtitles-fill";
export const id="dl_ac98c6676ad94fb485e6";
export const url=new URL("../icons/S/subtitles-fill.svg?v=0227edea72f7fa0bbcaa938a5bb6e6b803abe2b27d3bb6eda364354b806cdb86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
