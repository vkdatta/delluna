export const name="lucid_1-briefcase-medical";
export const id="dl_a95ba20142a74707b827";
export const url=new URL("../icons/lucid_1-briefcase-medical.svg?v=7adc09529823908850c8f3ed969f9e15c24c759efb1385c07794431bead6de5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
