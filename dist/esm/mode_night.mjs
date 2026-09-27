export const name="mode_night";
export const id="dl_146b11aa656b0cbaffbe";
export const url=new URL("../icons/mode_night.svg?v=56c547d2a93f2da7afcc2030e9ba35d545e9057669e3217662b790c5dff02edd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
