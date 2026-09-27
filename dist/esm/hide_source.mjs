export const name="hide_source";
export const id="dl_a3d67829d1d807208ee5";
export const url=new URL("../icons/hide_source.svg?v=3027f3e5956616ebc4d2381a779a2c5910b4200d32298c11a2d5562c1e57535c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
