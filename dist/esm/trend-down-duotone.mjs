export const name="trend-down-duotone";
export const id="dl_23583e5878e2428a9c82";
export const url=new URL("../icons/T/trend-down-duotone.svg?v=70db9006bbc3de5d6f5d9efe055238803edaa4654895031441dd3824d0db1215",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
