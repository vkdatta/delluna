export const name="av_timer-fill";
export const id="dl_056b67da7e7546a689f7";
export const url=new URL("../icons/A/av_timer-fill.svg?v=b656213076f308a49dbedaa4c9c340a20bcea3f37a8dcecfae6ba4692acaed28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
