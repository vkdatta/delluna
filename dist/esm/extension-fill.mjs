export const name="extension-fill";
export const id="dl_4630e5bb7d3e2649efaa";
export const url=new URL("../icons/extension-fill.svg?v=20cf4b92fc4702ce49a6e6601f7c8252d96167d672307479643b641367e00b34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
