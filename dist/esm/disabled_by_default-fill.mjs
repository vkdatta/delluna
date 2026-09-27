export const name="disabled_by_default-fill";
export const id="dl_f2b87d7d5ca001cbd5b8";
export const url=new URL("../icons/disabled_by_default-fill.svg?v=57ebc2e5e563ea1693f4ee6f3094d5f572da53f0f661ce0a598780f0d688c68a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
