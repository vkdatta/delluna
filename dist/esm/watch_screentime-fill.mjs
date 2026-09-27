export const name="watch_screentime-fill";
export const id="dl_8a0491cc6fbf14195dbc";
export const url=new URL("../icons/watch_screentime-fill.svg?v=204ef1a94b34a7ea5c05b17f7945190759ed4c3516553ebbcda12845742052d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
