export const name="currency_rupee-fill";
export const id="dl_a1caf42add1ad9433627";
export const url=new URL("../icons/currency_rupee-fill.svg?v=e1914ff06e7b1e5049a927ebe36eb56233eeb31bc3ab780caa0b3d7a37c0d5d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
