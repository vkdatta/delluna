export const name="orange";
export const id="dl_782c769afb2d4d7283a0";
export const url=new URL("../icons/orange.svg?v=b6ef1a7de9701437a8207ea0af3e59b721ab108b40b290da4300c0f63b33a22e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
