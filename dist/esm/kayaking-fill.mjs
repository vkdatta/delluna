export const name="kayaking-fill";
export const id="dl_939a8ab9c7e734a2bfb1";
export const url=new URL("../icons/kayaking-fill.svg?v=d89367c7a00c661312dc39d20e3fe5dc611fd5f905db51661628a350444f3962",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
