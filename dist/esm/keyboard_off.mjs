export const name="keyboard_off";
export const id="dl_1635b528bdc80b4f940f";
export const url=new URL("../icons/keyboard_off.svg?v=0c51b9af2eac25909bda03ec48cea3ac55701f7ca62b7dcfbea3776c9cbb1845",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
