export const name="lucid_1-bow-arrow";
export const id="dl_ac9ced4b0a62421dbc73";
export const url=new URL("../icons/lucid_1-bow-arrow.svg?v=ccc99e027da849fb245709e29a3d6a2e79255304e3e0248d07a3bedd0a9eae19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
