export const name="lucid_3-phone-call";
export const id="dl_43664c461e5542ee9988";
export const url=new URL("../icons/lucid_3-phone-call.svg?v=c1b7ad69798a0a763b7b7ffbcff6b8a216ff0be8883f25112845b5fe77af0ac1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
