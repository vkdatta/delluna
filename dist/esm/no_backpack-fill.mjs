export const name="no_backpack-fill";
export const id="dl_dfe744fa04a570da7788";
export const url=new URL("../icons/no_backpack-fill.svg?v=491a6f1db27b2eaae9825f0e50e6bd515fbe131fe52878b12e78ca3c6223c6cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
