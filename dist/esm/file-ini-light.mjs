export const name="file-ini-light";
export const id="dl_d2d867c741a84ef1a08a";
export const url=new URL("../icons/file-ini-light.svg?v=7679aad8c66fe53b15c604aca2d42bd76fcc0b0e106600e66270524e8133f0ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
