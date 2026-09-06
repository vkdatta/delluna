export const name="cpu-duotone";
export const id="dl_c687b5c7593c48e5a040";
export const url=new URL("../icons/cpu-duotone.svg?v=90317b07d6f560aebf37e2aa29fa5750f3f4f959797c610054cc750bbbebab9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
