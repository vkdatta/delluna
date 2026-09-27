export const name="bath_soak-fill";
export const id="dl_7ad4a3d89ee458b9f5c9";
export const url=new URL("../icons/bath_soak-fill.svg?v=c6f0e834ac4cb4c8ba52b268d966201b05850cd596c0d09398b916f3997e3c99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
