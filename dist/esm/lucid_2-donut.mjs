export const name="lucid_2-donut";
export const id="dl_74d684cfd1f042508cfb";
export const url=new URL("../icons/lucid_2-donut.svg?v=aedeb537265cec4c64403d8f23240b989fb28a030108cc7cff3e28cffda9a5eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
