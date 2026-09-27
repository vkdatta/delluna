export const name="rebase-fill";
export const id="dl_9f04d66b7382bb2cd04e";
export const url=new URL("../icons/rebase-fill.svg?v=1175ff6ef29f7eef239a6fa1a718ba10593343823da6c061382764be6a84ba0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
