export const name="docs_apps_script-fill";
export const id="dl_3adbb324db0ef405276c";
export const url=new URL("../icons/docs_apps_script-fill.svg?v=f33774fe6a44215d4f578d8783405c8dd25c3f90681073ad0dca3bc231645a0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
