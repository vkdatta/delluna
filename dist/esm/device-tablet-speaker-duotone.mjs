export const name="device-tablet-speaker-duotone";
export const id="dl_9d72f064b2e1417ab300";
export const url=new URL("../icons/device-tablet-speaker-duotone.svg?v=421e1ce5705fe9f405b5bc06058c8de179b9e660abfa2947690c4b43c2ee4f3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
