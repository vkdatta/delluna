export const name="wallet-fill";
export const id="dl_50be9c6633d9528df74b";
export const url=new URL("../icons/wallet-fill.svg?v=d0dfe6ae4501d7df8e3b35de65541e56ca61d7febdab556bc663001007ceee2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
