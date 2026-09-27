export const name="mobile_sound_off";
export const id="dl_5f715ac71e967eee9df9";
export const url=new URL("../icons/mobile_sound_off.svg?v=6d8b73ab33daabd628bd68c949c7ec60cbbd799704a8272a09f5e7e9bbd900eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
