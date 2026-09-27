export const name="brackets-round-fill";
export const id="dl_0a9d90bf8e3d4987927c";
export const url=new URL("../icons/brackets-round-fill.svg?v=1f0f9323c8c55cf449b7ec8284b4cd421176ea4f4d1baba833b8a2ca1a1c276d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
