export const name="sound_detection_dog_barking";
export const id="dl_4c396a65c42d41b3b076";
export const url=new URL("../icons/S/sound_detection_dog_barking.svg?v=e78684278491a75259327a19205f36a97803f2cc36dbee7a65e9ed35b2ca0221",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
