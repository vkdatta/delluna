export const name="eda-fill";
export const id="dl_53840d59e89fddc0427f";
export const url=new URL("../icons/eda-fill.svg?v=58537001558827c53eb95a5fb3b4524f7437f74d9ebef601b35c31c0476471b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
