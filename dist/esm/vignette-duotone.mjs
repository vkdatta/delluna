export const name="vignette-duotone";
export const id="dl_4775b8f698d148d89cd3";
export const url=new URL("../icons/V/vignette-duotone.svg?v=b744ab9a82687642b2b7190b37d6f84a449bd338d5ab74e34ead26158e7ecffc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
