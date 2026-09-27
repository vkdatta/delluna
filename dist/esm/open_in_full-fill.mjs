export const name="open_in_full-fill";
export const id="dl_ab0ec4f37600df8e5100";
export const url=new URL("../icons/open_in_full-fill.svg?v=1076ee6a1c7286cc402ca30f234c10d6a62734dc5bdf4a64d3d622a2568aaf7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
