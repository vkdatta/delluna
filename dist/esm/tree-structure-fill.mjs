export const name="tree-structure-fill";
export const id="dl_8f800861eb4a2967d3ab";
export const url=new URL("../icons/tree-structure-fill.svg?v=a62e5edab18dba21023a9db504cf7f35b9e74f6a8423a901ed8ed1d5bbdd98b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
