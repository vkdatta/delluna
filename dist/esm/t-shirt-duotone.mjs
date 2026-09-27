export const name="t-shirt-duotone";
export const id="dl_8a27319ce934b65cfcf0";
export const url=new URL("../icons/t-shirt-duotone.svg?v=125e2437d58bb2b1a20bf553cdd3f511568dea10f960f59514f13d6515cacb6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
