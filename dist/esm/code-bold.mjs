export const name="code-bold";
export const id="dl_407f90299758456ab66f";
export const url=new URL("../icons/code-bold.svg?v=88e3429779a144c9012da89a08002446a73c7299d02483bfadfa02d4735e2198",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
