export const name="sigma-light";
export const id="dl_f0c51c21c2b775c9a7c6";
export const url=new URL("../icons/sigma-light.svg?v=4b4311bac3b29ff2bd7cc0a576a142bc859a837ad96e04e733f6cb3c7d1d490c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
