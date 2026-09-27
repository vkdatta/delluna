export const name="settings_motion_mode";
export const id="dl_92353026342b934133df";
export const url=new URL("../icons/settings_motion_mode.svg?v=d82b691e0a7006d3730b4d219bb4086748afd9213bb343adc5179d3db2f7b4e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
