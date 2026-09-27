export const name="2k_plus-fill";
export const id="dl_07445d1dc83e667eb670";
export const url=new URL("../icons/2k_plus-fill.svg?v=a7f955f2bc603eac4832307def42138dbb5b19170ce44c81f2c8ae6e2828fe97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
