export const name="number-circle-one-duotone";
export const id="dl_c137ddfab7264fbb91ba";
export const url=new URL("../icons/number-circle-one-duotone.svg?v=3e531fd887f14d4f4fa8b984046f2e3f69e7930cc12888d76a9cbe4896f5d456",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
