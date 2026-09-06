export const name="device-mobile-speaker-thin";
export const id="dl_9c469817d0104233870a";
export const url=new URL("../icons/device-mobile-speaker-thin.svg?v=3720cd0087286ffc1faa75c4e5c9683c540a4296e74fba267677c5b29e3a83af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
