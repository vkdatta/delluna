export const name="cloud_circle";
export const id="dl_cfed6c9a272f4cd784d6";
export const url=new URL("../icons/C/cloud_circle.svg?v=1dedb13249dd64d9083d80acd1b3ef399d04d8d45cdcefdcfd04851cdd42938a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
