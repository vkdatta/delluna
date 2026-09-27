export const name="deployed_code_alert-fill";
export const id="dl_4e7b5de5560181dd9c25";
export const url=new URL("../icons/deployed_code_alert-fill.svg?v=5a1ce5f67761bc45108fdc6b3e8c8c1769c6387cb328a525dc320ef01ce79c87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
