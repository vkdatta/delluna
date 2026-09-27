export const name="mode_dual-fill";
export const id="dl_769a106a2b5ec669ae9e";
export const url=new URL("../icons/mode_dual-fill.svg?v=1f7f64a1e49c7889342275da7afb82aefce909b36a64a851dc34eb3389b9a8bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
