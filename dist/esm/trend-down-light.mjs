export const name="trend-down-light";
export const id="dl_1b1d1352d86e4df39ecd";
export const url=new URL("../icons/T/trend-down-light.svg?v=cfa8eb6d61762e3a0501b2290f867c9a166b44ea0e439303bafefa2964bcd012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
