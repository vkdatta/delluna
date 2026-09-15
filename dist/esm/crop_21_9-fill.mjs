export const name="crop_21_9-fill";
export const id="dl_78847443c2a64861a663";
export const url=new URL("../icons/C/crop_21_9-fill.svg?v=c1936b0815385f30930b43089650120418a7369beed1fdfc69509caae2e4d0ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
