export const name="modeling";
export const id="dl_a13058bfa87fac948303";
export const url=new URL("../icons/modeling.svg?v=97ceff0cb17e6b5e6a9e135a8a4bf4a3ad09ea976f073622305f84abff05c3da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
