export const name="sound_detection_dog_barking-fill";
export const id="dl_d0f54bf03b53bfdf5819";
export const url=new URL("../icons/sound_detection_dog_barking-fill.svg?v=8b052053c1024bfac3a713135cb67ca0429d329bca21d5f925da7d8819a5e2bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
