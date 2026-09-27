export const name="7mp-fill";
export const id="dl_63d57c996f9171633dc2";
export const url=new URL("../icons/7mp-fill.svg?v=735f0f907d933b90d44041f4962a263f3afc47c207ec8686ef94a8c7b681f741",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
