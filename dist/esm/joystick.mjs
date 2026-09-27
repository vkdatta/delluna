export const name="joystick";
export const id="dl_51ce34605348a7e9dbe1";
export const url=new URL("../icons/joystick.svg?v=0d6c72360f0e79f714854103ff366eb21c009872c041e21650821b856de88d1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
