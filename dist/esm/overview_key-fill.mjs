export const name="overview_key-fill";
export const id="dl_d0c77b033eabb91cb519";
export const url=new URL("../icons/overview_key-fill.svg?v=dc6b03ecbe8b85cc20468c70bf73bedef9d7db79ece7d4341f0d5ccaa6b40965",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
