export const name="settings_overscan-fill";
export const id="dl_d59ff4afd71f49e4867c";
export const url=new URL("../icons/settings_overscan-fill.svg?v=0ae488cfe049a4cb77205d612355e9f9c1e0d73bd63296dbec7d4d97593cbaea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
