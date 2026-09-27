export const name="weight-tilde";
export const id="dl_ff2d82a28a904fd6ad01";
export const url=new URL("../icons/weight-tilde.svg?v=32be6c85f1a03044de778d24a5599100bfa074b7a6733e6292ee58a98c5f45bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
