export const name="unite-square-light";
export const id="dl_f2d8f2b829e893c1afc8";
export const url=new URL("../icons/unite-square-light.svg?v=3e9935c9f190f51c4d7f78f57ef87bbe5f9c1d4f0f47b2e0f74069895515f053",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
