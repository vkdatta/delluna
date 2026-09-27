export const name="medal-light";
export const id="dl_af4ebc554ff94dc2afc2";
export const url=new URL("../icons/medal-light.svg?v=c29984e9fb0f1b79bfc2364220c8d313180c3fdb25453518c6d24db24c040354",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
