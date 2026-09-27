export const name="notion-logo-fill";
export const id="dl_52985aba6af549138314";
export const url=new URL("../icons/notion-logo-fill.svg?v=d84c97781f27093431b136b4797222f0fc06c06ad66c16974b62516407ac03c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
