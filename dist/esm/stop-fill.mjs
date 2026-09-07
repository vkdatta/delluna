export const name="stop-fill";
export const id="dl_10e0882d4c534aa09a3e";
export const url=new URL("../icons/S/stop-fill.svg?v=7d9cb9f0bc3363ba8846cf915bc8a84e824804025defaba58eb9df8c21105bb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
