export const name="cheese";
export const id="dl_583ad7eec0b24a7781d2";
export const url=new URL("../icons/cheese.svg?v=8b43e437b5456ebecc681817c4edc24f03ac655057240ad971232f2cdada14b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
