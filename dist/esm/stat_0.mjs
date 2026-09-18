export const name="stat_0";
export const id="dl_5c37fc24be434452a17e";
export const url=new URL("../icons/stat_0.svg?v=79582b7e9a4c7bbdf092331e9731a39added8e53a02e2ed647c3d0737f8db850",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
