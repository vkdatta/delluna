export const name="lucid_3-panel-top-open";
export const id="dl_7285e1663f214c88b6bb";
export const url=new URL("../icons/lucid_3-panel-top-open.svg?v=b7c37894241b99ca309d93478cee861248e0577ecdbc6e2eddbd75f93c974ec4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
