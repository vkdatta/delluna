export const name="cloud-warning-duotone";
export const id="dl_a817e2ee20ca4751aebc";
export const url=new URL("../icons/cloud-warning-duotone.svg?v=d6affeb65b674baa9ce1bfb9b1e103ba341182a794dc6e6181d0d9c0bc628a6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
