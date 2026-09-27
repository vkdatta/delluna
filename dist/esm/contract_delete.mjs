export const name="contract_delete";
export const id="dl_057aa6843cd7d748ad2d";
export const url=new URL("../icons/contract_delete.svg?v=4c5cd4ef153a3934671705f8bd9199bcac9844cdbd3e88f0b9db3491750cec3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
