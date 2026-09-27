export const name="delete_forever-fill";
export const id="dl_a3e129235dae9cd03052";
export const url=new URL("../icons/delete_forever-fill.svg?v=9f2b7cdf80100789b15e6b12e9c16e628e7e77d773ac16eae01e06240a2a2a6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
