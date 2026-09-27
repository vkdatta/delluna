export const name="flip-horizontal-duotone";
export const id="dl_f0f188216abf4c9d99d6";
export const url=new URL("../icons/flip-horizontal-duotone.svg?v=f5670c31403950480613c34be9a4d5650ec66642d7e73b66105d823485d994dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
