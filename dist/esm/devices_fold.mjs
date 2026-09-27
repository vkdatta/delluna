export const name="devices_fold";
export const id="dl_8998fa10a1e3a47ede3e";
export const url=new URL("../icons/devices_fold.svg?v=543078ad053431dc4b8cc265b5d5d0d2434cd09bbef7a41ae988411e3bb94af8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
