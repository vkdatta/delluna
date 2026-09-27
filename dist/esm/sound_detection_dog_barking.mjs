export const name="sound_detection_dog_barking";
export const id="dl_b22474a854abd32ee63d";
export const url=new URL("../icons/sound_detection_dog_barking.svg?v=c551d3a7acf07a4f28735d0ad54ee5c36ca18993b3e482779fe91bfa066fc66b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
