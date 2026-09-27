export const name="device-mobile-speaker-thin";
export const id="dl_9c469817d0104233870a";
export const url=new URL("../icons/device-mobile-speaker-thin.svg?v=83fd027ba470b4e780676f3c8b73832b8adbb43b6099bcf467abeb5cf32d9b12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
