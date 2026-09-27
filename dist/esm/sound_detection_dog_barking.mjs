export const name="sound_detection_dog_barking";
export const id="dl_d4ef32f774ecf511222e";
export const url=new URL("../icons/sound_detection_dog_barking.svg?v=bac72771c4222ac76bd3bf66eb87cec4bbbeed39bea4825151cfc3fcdaddd2a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
