export const name="control-light";
export const id="dl_e7be039089a548f183d8";
export const url=new URL("../icons/control-light.svg?v=a85264b8ccb64e6b752b9a69e193af7adab3f819fc0a04fd117928b7b931f2db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
