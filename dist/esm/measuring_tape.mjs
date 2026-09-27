export const name="measuring_tape";
export const id="dl_f0252b86e013d87e4cd3";
export const url=new URL("../icons/measuring_tape.svg?v=0a152ef20520ea2bdd83078c6f9e2bfba35118ce2d22da3cdbccb0bf5aa5f2b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
