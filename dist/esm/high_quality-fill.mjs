export const name="high_quality-fill";
export const id="dl_c5d44b3d5e0b5d7e194b";
export const url=new URL("../icons/high_quality-fill.svg?v=eee1c196e5b5ecd208f9e81c713e47c754b3c381e2a52901492f004b940a7419",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
