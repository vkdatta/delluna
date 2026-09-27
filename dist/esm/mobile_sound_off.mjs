export const name="mobile_sound_off";
export const id="dl_d5feb46d8899a29be341";
export const url=new URL("../icons/mobile_sound_off.svg?v=7c734d7802c16d036e266693ba4ffb9da0d01dd402548f3d586c5934e510d026",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
