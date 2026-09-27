export const name="wallet-minimal";
export const id="dl_0eb6d3ff5e264fd18a73";
export const url=new URL("../icons/wallet-minimal.svg?v=85661f9e43114540988f3d7e4c904504c841d6c964fc8e4878031423a9541c63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
