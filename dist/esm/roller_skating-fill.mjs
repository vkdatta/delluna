export const name="roller_skating-fill";
export const id="dl_7237195f4a9bc6c0da20";
export const url=new URL("../icons/roller_skating-fill.svg?v=96d1cb834345d84ef5a59b0d39d5f1d1c8b93870dbbf61e7beee8b40e9a3aec2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
