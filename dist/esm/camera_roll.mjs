export const name="camera_roll";
export const id="dl_e4cdb231b97c4c90145b";
export const url=new URL("../icons/camera_roll.svg?v=2e122b653636c53b11ac4be2076373cc366741aee5d7e80e82130a1f77228378",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
