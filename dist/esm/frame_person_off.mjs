export const name="frame_person_off";
export const id="dl_7bb035843cf2eb11f6ae";
export const url=new URL("../icons/frame_person_off.svg?v=7a44ee8e43c07a446d4278747c76cdfc2deb4461f2b09099997a746d210a77c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
