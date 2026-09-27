export const name="skateboarding-fill";
export const id="dl_fbca13b7462502cfc8c4";
export const url=new URL("../icons/skateboarding-fill.svg?v=41bce76b1ec1bad72be57dcfb426c45e98f9c10df4a668d1de0c42c06a2df591",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
