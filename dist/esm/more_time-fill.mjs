export const name="more_time-fill";
export const id="dl_bdc6733c39e6d53f13ab";
export const url=new URL("../icons/more_time-fill.svg?v=ac4c0abda5fe99588b494a35bf7bf912ae778513ec522eba00edd5076747ec4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
