export const name="soundbar";
export const id="dl_c6ebef459532cfba99e6";
export const url=new URL("../icons/soundbar.svg?v=cdac1558c15ecb194a67e428cc900b3f1bd4302e48caa04ef82f8f17a44998ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
