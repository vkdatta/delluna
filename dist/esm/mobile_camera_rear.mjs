export const name="mobile_camera_rear";
export const id="dl_f465ab49be654b12806b";
export const url=new URL("../icons/M/mobile_camera_rear.svg?v=d0d1ece31fd5b620a149910fc1f918c4fe4f3cfa95a46b06cf10c8e3c43270a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
