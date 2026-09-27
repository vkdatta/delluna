export const name="device-mobile-speaker-bold";
export const id="dl_2b473192fd7245d68463";
export const url=new URL("../icons/device-mobile-speaker-bold.svg?v=3f8a87c7b3037404abd3ba629455438d9319b2b947562e095d64e87be0d51364",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
