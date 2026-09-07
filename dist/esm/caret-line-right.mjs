export const name="caret-line-right";
export const id="dl_cf7693c9f37e404cad7a";
export const url=new URL("../icons/caret-line-right.svg?v=f6308557e7aa3fcaa30e979756afef34fbb6acd6bf7f5cd983a816f88e920935",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
