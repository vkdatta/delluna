export const name="nearby-fill";
export const id="dl_ea6f0b7f979a65bd345f";
export const url=new URL("../icons/nearby-fill.svg?v=9abb758c5300ba57a2ba2ea734f46f90d788c5e93d307e9db2c5ca7358d9a782",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
