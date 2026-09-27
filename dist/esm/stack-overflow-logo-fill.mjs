export const name="stack-overflow-logo-fill";
export const id="dl_64c87a3299e6da228342";
export const url=new URL("../icons/stack-overflow-logo-fill.svg?v=dac4ac4aea1e480662105864d9eec83609ab90f7490861442514fd1c7e81df74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
