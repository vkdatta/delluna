export const name="domain_disabled_check-fill";
export const id="dl_c51a5625c0562198f8bc";
export const url=new URL("../icons/domain_disabled_check-fill.svg?v=d58d84cd8371f731f41d2f51a0ca51e0ffa02f44e91fbfc7402e19626bda14f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
