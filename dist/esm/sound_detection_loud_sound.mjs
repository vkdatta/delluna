export const name="sound_detection_loud_sound";
export const id="dl_a11e70096682d96bf542";
export const url=new URL("../icons/sound_detection_loud_sound.svg?v=9b0c9e87ec5b0fc858ab25342777450d10bc6b65f1591bc347707d7c870c9e88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
