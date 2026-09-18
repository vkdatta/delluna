export const name="nest_multi_room-fill";
export const id="dl_2ca7fc12ccd44e6fa844";
export const url=new URL("../icons/N/nest_multi_room-fill.svg?v=f9504dc198caa0d3efa93b84425c5f232cd292391d5556036ac60f7dbb9b6832",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
