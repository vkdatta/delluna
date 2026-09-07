export const name="twitter-logo-duotone";
export const id="dl_b9033c5753ba4f90b3a4";
export const url=new URL("../icons/T/twitter-logo-duotone.svg?v=5fa055354013b19e38b8cd6d7956b0bcda6b579d6bee910bd115e199f8a0dfdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
