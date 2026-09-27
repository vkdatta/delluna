export const name="sound_detection_dog_barking-fill";
export const id="dl_04d076a5fcb38f59bb5e";
export const url=new URL("../icons/sound_detection_dog_barking-fill.svg?v=c536328049b04e441a56e40ccc31f240c5b60587e0434f179b944d84f94b99dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
