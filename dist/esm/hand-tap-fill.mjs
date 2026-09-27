export const name="hand-tap-fill";
export const id="dl_e2e35716444f48bf895f";
export const url=new URL("../icons/hand-tap-fill.svg?v=2a4746fc6e885eaae415eedeb77e9cd5f33aca88a6a4b7c03e52f4c4bec8985b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
