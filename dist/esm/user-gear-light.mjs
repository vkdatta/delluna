export const name="user-gear-light";
export const id="dl_5582728ed49b565664c4";
export const url=new URL("../icons/user-gear-light.svg?v=1d3d7ba4e334f15f0acd38d02d63c2e2b6de1e2180a073c4ff789907fa19e6eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
