export const name="waveform-slash-bold";
export const id="dl_110fb212e0c492caea83";
export const url=new URL("../icons/waveform-slash-bold.svg?v=4efb0b5a430c1edfb3dd397100dc063a10ca72b960273ffc71b1dad91e8ca27f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
