export const name="stat_3";
export const id="dl_ce25ebee4c51080d77aa";
export const url=new URL("../icons/stat_3.svg?v=91eb2011b6a1a514a72f66f355413f3b94927051e3d0cba852270fd25bf0f26f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
