export const name="play_disabled-fill";
export const id="dl_5b801a1fd66d43aaae63";
export const url=new URL("../icons/P/play_disabled-fill.svg?v=77aeb96174547aa46ee0576fe84805b6105fde615baad3fbf2e61d83fe1b0e28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
