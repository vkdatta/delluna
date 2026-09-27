export const name="touchpad_mouse_off";
export const id="dl_7cffc7da4e7b0a3fbfcd";
export const url=new URL("../icons/touchpad_mouse_off.svg?v=1818ace315ad2df1959eb534205aceddeb40f15aaf3a30dc633e1057329d88c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
