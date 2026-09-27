export const name="gauge-fill";
export const id="dl_71baee47768a4b70a564";
export const url=new URL("../icons/gauge-fill.svg?v=8a27a8d00d12093b16c0f1e0032cb7abdc7bd393ff1a7253c4493933b6f108d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
