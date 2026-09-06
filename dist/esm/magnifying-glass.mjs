export const name="magnifying-glass";
export const id="dl_35b412a8f8754cf59680";
export const url=new URL("../icons/magnifying-glass.svg?v=f9fa2561978a9a3291e8ae0ebfcb651104f5069fade8f84871627bca68889cde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
