export const name="stack";
export const id="dl_97c7e1c8589a4f1abd08";
export const url=new URL("../icons/stack.svg?v=9a8ffaf9cb2d0518df4f8a9fce99d51529d1e59260dea8ced10994a87cdf4b22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
