export const name="identity_platform-fill";
export const id="dl_6df822ea744d44158726";
export const url=new URL("../icons/I/identity_platform-fill.svg?v=84db986ed238ce2068f5eee33359c07a9faaab48468e80c0138271f7110364d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
