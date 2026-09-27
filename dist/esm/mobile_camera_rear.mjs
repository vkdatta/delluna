export const name="mobile_camera_rear";
export const id="dl_79ec6cc3a3f7cb6b2d70";
export const url=new URL("../icons/mobile_camera_rear.svg?v=d0d1ece31fd5b620a149910fc1f918c4fe4f3cfa95a46b06cf10c8e3c43270a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
