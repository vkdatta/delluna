export const name="extension_off-fill";
export const id="dl_5f52c67162ef33dc379a";
export const url=new URL("../icons/extension_off-fill.svg?v=b607c936f89ae288c81e055cf7c8c0705100f57630c5d180e39d24d547f7032b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
