export const name="digital_wellbeing";
export const id="dl_013c013cb1faacfaec40";
export const url=new URL("../icons/digital_wellbeing.svg?v=de656c898d48fad4cc2d97b90c6ec6908c23e5582aa8058b19ce05d52e4f527b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
