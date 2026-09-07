export const name="seal-check";
export const id="dl_68acf96f8cfa45ef88da";
export const url=new URL("../icons/S/seal-check.svg?v=462ca0e3c6be8be9b834e3c5a3eff2b4600ccaa9341dab9a13caf71ce6190788",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
