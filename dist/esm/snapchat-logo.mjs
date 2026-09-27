export const name="snapchat-logo";
export const id="dl_60cf95f857a8cf35dd6f";
export const url=new URL("../icons/snapchat-logo.svg?v=ca08949ab724e699dac23afd3a2422043052837921f33e7fea1dbd9250784b25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
