export const name="unpublished-fill";
export const id="dl_b13fe2a6fbaceb1cdd46";
export const url=new URL("../icons/unpublished-fill.svg?v=af1e6e64e849dc5b40e2f4679f4c38960e0e67a19c71bcadf6ed1b12820e9476",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
