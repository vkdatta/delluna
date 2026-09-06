export const name="app-store-logo-light";
export const id="dl_383ceed7d90740c38ef6";
export const url=new URL("../icons/app-store-logo-light.svg?v=74a8747b5ef093ed65f5ad9794856b4b4c0f84f0136148800acc1e367dd77cf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
