export const name="shaved_ice-fill";
export const id="dl_9edd4ba2b0244f4385d8";
export const url=new URL("../icons/shaved_ice-fill.svg?v=7c847de7d6e3697aa32f69283f878ae218722866c1bb46830ecaebf739c2e27c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
