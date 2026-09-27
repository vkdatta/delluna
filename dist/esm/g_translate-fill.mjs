export const name="g_translate-fill";
export const id="dl_99396ceee1a13d4c475f";
export const url=new URL("../icons/g_translate-fill.svg?v=4f82dc05a8c49e895c8d582b609dfc07e7f7b8da7a95c7738b9dd82e3912099a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
