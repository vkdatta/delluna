export const name="other_houses-fill";
export const id="dl_289268302e644ceabd7e";
export const url=new URL("../icons/other_houses-fill.svg?v=734dc3996f580920b928227c19723dc36763a5b7f7b79ef095f6a074c2d2f79e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
