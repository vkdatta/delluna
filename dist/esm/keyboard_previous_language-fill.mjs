export const name="keyboard_previous_language-fill";
export const id="dl_ac48a1c481318477f5f5";
export const url=new URL("../icons/keyboard_previous_language-fill.svg?v=0b16b40cedf41f9981398085bd5aa1acc286652d14df73fbbfd16cede649889d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
