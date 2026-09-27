export const name="business_chip-fill";
export const id="dl_6681f296ff549b13d330";
export const url=new URL("../icons/business_chip-fill.svg?v=df4f645e482a697e5ac2887cc404218e99eb2004ed06b993230b3eb366131340",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
