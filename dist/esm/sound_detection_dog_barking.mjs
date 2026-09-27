export const name="sound_detection_dog_barking";
export const id="dl_ffb383f1bd6a726829b2";
export const url=new URL("../icons/sound_detection_dog_barking.svg?v=6bc11fcd03440465f55aa4e056b595bf111df30d57134e3981057e67960498ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
