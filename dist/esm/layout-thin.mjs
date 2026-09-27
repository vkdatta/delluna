export const name="layout-thin";
export const id="dl_41c5f8c617f840918caa";
export const url=new URL("../icons/layout-thin.svg?v=0ea5fcae326049e5e0442b57ca0ae17d6f9b93ef97352dbc149fe06b769b715e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
