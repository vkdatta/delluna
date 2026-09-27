export const name="flip_camera_ios";
export const id="dl_27a492fbc2ee8a4179b0";
export const url=new URL("../icons/flip_camera_ios.svg?v=632bf0cd87465e2f37dd12042fac133a2cfb1980ede518c568b3081c8c7eaa0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
