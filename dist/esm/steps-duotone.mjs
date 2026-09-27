export const name="steps-duotone";
export const id="dl_d5ffebc4ec51ad258ef0";
export const url=new URL("../icons/steps-duotone.svg?v=aca111188f3e6b59429fb8edc43c8c789954f4250b08d67865e268062951ca98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
