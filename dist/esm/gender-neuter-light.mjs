export const name="gender-neuter-light";
export const id="dl_fee129190adf41b49527";
export const url=new URL("../icons/gender-neuter-light.svg?v=3252021cdd61eaa7adc0b01d6cf8480d760f2ec930a1956de71d6d6263db6359",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
