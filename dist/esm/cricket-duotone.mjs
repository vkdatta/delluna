export const name="cricket-duotone";
export const id="dl_1f6f447a09dd48f8a8b3";
export const url=new URL("../icons/cricket-duotone.svg?v=7e032763b47446fd68155863e97d0a3027d9a0b78f92b73a40446224838ccf23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
