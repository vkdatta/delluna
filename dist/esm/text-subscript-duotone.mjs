export const name="text-subscript-duotone";
export const id="dl_71af159fc4c832e3ebde";
export const url=new URL("../icons/text-subscript-duotone.svg?v=a68320e38e9debbc1fee24e1e64029501d468abedd6e270069b1f2b1b34794ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
