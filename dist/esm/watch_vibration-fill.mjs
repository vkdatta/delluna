export const name="watch_vibration-fill";
export const id="dl_7d0aa336593abfcec635";
export const url=new URL("../icons/watch_vibration-fill.svg?v=9e116273b87bf305ce32b265c84799056aac6504461487ad5cbe0abfdf09d096",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
