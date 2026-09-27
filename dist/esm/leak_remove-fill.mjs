export const name="leak_remove-fill";
export const id="dl_2cf0c853da1104d697d1";
export const url=new URL("../icons/leak_remove-fill.svg?v=b753d0e22148d75dfae99928c6fcd517640349366a0aab1204de86bf5dd2a779",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
