export const name="subroutine";
export const id="dl_020f1e7212fe461b935e";
export const url=new URL("../icons/subroutine.svg?v=57b2823a5090e67bc8768e477199366037f0f01849b77edcfeaac9430e1ca081",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
