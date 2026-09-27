export const name="plug-light";
export const id="dl_0d3f583a864d4df2a921";
export const url=new URL("../icons/plug-light.svg?v=7004f6dfa2694a20682d548ed23097a1aa1591fc1cf29d025083e67ffa76a0dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
