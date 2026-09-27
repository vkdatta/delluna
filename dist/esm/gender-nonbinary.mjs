export const name="gender-nonbinary";
export const id="dl_8392c6f613d84713abd5";
export const url=new URL("../icons/gender-nonbinary.svg?v=5f52702462a7bcecbf2f4e8797bb037d20a57b3f9fda36696e5aa974d953f602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
