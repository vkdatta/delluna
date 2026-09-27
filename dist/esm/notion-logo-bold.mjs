export const name="notion-logo-bold";
export const id="dl_ef7d911f419f4e8fbc05";
export const url=new URL("../icons/notion-logo-bold.svg?v=901988f2c9d2b644f9a7a8c16c289ea395a24b27177d7d80e74df5586576d390",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
