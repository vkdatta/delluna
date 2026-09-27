export const name="lucid_1-arrow-big-up-dash";
export const id="dl_ce4ad41bb0c74ee08801";
export const url=new URL("../icons/lucid_1-arrow-big-up-dash.svg?v=f452bb73dd24070d8624e60e0284432cfa0bb51489d50a8b322ce824769f419b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
