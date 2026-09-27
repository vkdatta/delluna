export const name="zodiac-scorpio";
export const id="dl_971753d2637149188ca1";
export const url=new URL("../icons/zodiac-scorpio.svg?v=adb37c4992fefede00f09ba8a44b3160947e959b01bb1e7919646237a9b679a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
