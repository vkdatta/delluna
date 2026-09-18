export const name="high_quality_off";
export const id="dl_c4bdca5b75f54ecbbd06";
export const url=new URL("../icons/H/high_quality_off.svg?v=2183bf2de18fe6ee6a65b6077e04196e6ee05443b147e3093607fc554e0f71f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
