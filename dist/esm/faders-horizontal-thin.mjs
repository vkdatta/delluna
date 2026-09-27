export const name="faders-horizontal-thin";
export const id="dl_dbb29531bd5943f08fa6";
export const url=new URL("../icons/faders-horizontal-thin.svg?v=0fb83f5815f28204170930e912f64233524dba551cda3d1b1739b8858d806a04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
