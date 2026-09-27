export const name="lucid_1-circle-arrow-down";
export const id="dl_9bb9aaa240644edda2a6";
export const url=new URL("../icons/lucid_1-circle-arrow-down.svg?v=57aadac4cc000914d2830ca6984d0f03e62971fa871ee7a3df773bacc4fc3bcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
