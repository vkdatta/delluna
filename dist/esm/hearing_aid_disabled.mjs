export const name="hearing_aid_disabled";
export const id="dl_01515a2c754f18e6beef";
export const url=new URL("../icons/hearing_aid_disabled.svg?v=714ab0a7d49d3e4dc9ebf85f91f6e7bffae64efe5fd8cbf215bd8c32a2147028",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
