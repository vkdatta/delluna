export const name="settings_timelapse";
export const id="dl_1c118140eeb620e027f0";
export const url=new URL("../icons/settings_timelapse.svg?v=715a370c590f047cf9d76a81a0246318ab324c3b9d3b2a7e4aa27d8dd6e3d5b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
