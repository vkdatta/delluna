export const name="network-slash";
export const id="dl_03e07d0ff81e4044be86";
export const url=new URL("../icons/network-slash.svg?v=1f7d314afb243b1e6f566a11ae6a20da9939a2e11d63d53a3915253e338c7703",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
