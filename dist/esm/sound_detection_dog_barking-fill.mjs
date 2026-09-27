export const name="sound_detection_dog_barking-fill";
export const id="dl_00ad3f3a9b17461af661";
export const url=new URL("../icons/sound_detection_dog_barking-fill.svg?v=a525d8782e44b0011db7851e20e8a86905750e1f734fe7c8b1459ab10cc20c41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
