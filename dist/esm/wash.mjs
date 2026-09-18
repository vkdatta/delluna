export const name="wash";
export const id="dl_f128e037a529460c9d79";
export const url=new URL("../icons/wash.svg?v=05ba6248d43b5b70c483e145f4f438fdc58b23a35611ca67121c75c9074343da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
