export const name="skip-back-duotone";
export const id="dl_f754942e21b7838eb8e0";
export const url=new URL("../icons/skip-back-duotone.svg?v=cb14d02f6eaaf55eecd10540bb5a9374c3a3aea1568e24fac80299c5121ce2bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
