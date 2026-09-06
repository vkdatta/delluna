export const name="gender-nonbinary-thin";
export const id="dl_ca4105901eae4206a6df";
export const url=new URL("../icons/gender-nonbinary-thin.svg?v=64ed225f0b5d0d9d0ed7ef6d703e995dc8ae895a61bac9bbacf87a9c106db5a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
