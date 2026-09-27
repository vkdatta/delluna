export const name="dynamic_form";
export const id="dl_a8267896eee8979255a4";
export const url=new URL("../icons/dynamic_form.svg?v=bb9362d3a77f4655d20cff1e2283a4aebd6f3d23af71a8c164249807a3d9cd2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
