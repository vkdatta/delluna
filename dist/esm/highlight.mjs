export const name="highlight";
export const id="dl_bbeb0fe941f547bdb613";
export const url=new URL("../icons/highlight.svg?v=1ccc74787d3a8163ccfa0a32b0d259a3485a6667e2a2df25212532b3d058c137",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
