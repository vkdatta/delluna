export const name="manage_accounts-fill";
export const id="dl_44c5c41521b7438fa83a";
export const url=new URL("../icons/M/manage_accounts-fill.svg?v=bd127ad2edebbe5313790e9df3f6104f169fc6db2cfef40f0b159944464cff67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
