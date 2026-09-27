export const name="diversity_3-fill";
export const id="dl_bf6fd7820a5c3d807bdf";
export const url=new URL("../icons/diversity_3-fill.svg?v=d06f1a3697e3bc3eb706be83cd727da599beba942636078a074f5b2cf9b9fd8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
