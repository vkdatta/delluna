export const name="binary-duotone";
export const id="dl_7f1d9d6d73e0479ab4f0";
export const url=new URL("../icons/binary-duotone.svg?v=61baf248963633d304abc14b4243c9f88a39c2b84a30adc3daf6c0d27f2da4af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
