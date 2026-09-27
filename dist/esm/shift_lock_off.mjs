export const name="shift_lock_off";
export const id="dl_fc743fe58abfd0ddca7d";
export const url=new URL("../icons/shift_lock_off.svg?v=a52c2c45f339853b802e793096732bf6744f3e251a40d90920d5a650d6b2d026",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
