export const name="settings_seating";
export const id="dl_0dc71fb199e58bc2a0be";
export const url=new URL("../icons/settings_seating.svg?v=9dbaab2d71fd65e4b1c5631998c5720797402c6415aadd95dbce0b00ff52e41f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
