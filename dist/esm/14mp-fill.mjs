export const name="14mp-fill";
export const id="dl_42168f326cace9255ca3";
export const url=new URL("../icons/14mp-fill.svg?v=0c31443a86aa913a407c39b78b93af9583ad4f2cf93f39df8b3d1f1c0756186b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
