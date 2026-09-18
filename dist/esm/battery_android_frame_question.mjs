export const name="battery_android_frame_question";
export const id="dl_483f91f5a2d2437dae1c";
export const url=new URL("../icons/battery_android_frame_question.svg?v=8a6f647c372bfec9a58e3e26a560785df7b0659ce0808fa2ac288b90ebbb9210",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
