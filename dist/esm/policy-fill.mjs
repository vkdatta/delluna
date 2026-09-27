export const name="policy-fill";
export const id="dl_c576e1b0f4de53bd9da8";
export const url=new URL("../icons/policy-fill.svg?v=43ff99cc3b74e16a75269eeddfbbf61050bc904b128351ce1fcbca2e7ed6f9f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
