export const name="commit";
export const id="dl_44ee3bf959407efbc772";
export const url=new URL("../icons/commit.svg?v=61b8d15618705cc46e84b2cc40b8ec988af2bc4f2dca017803d5cf7f895257bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
