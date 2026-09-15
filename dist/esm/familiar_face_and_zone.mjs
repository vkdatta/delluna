export const name="familiar_face_and_zone";
export const id="dl_d43b2c3f0ddd49839c88";
export const url=new URL("../icons/F/familiar_face_and_zone.svg?v=dc3497af5d53381038fa78ef8a4a63f22718edc892f42af3477791445d9c9afd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
