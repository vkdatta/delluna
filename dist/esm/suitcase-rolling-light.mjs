export const name="suitcase-rolling-light";
export const id="dl_570170f88003e29e4e72";
export const url=new URL("../icons/suitcase-rolling-light.svg?v=66c1f984491f6158242775c1bb933330a1c68a0e34c8f1e7402f8fe6bc7b87aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
