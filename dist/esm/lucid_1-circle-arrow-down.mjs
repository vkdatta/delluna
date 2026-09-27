export const name="lucid_1-circle-arrow-down";
export const id="dl_9bb9aaa240644edda2a6";
export const url=new URL("../icons/lucid_1-circle-arrow-down.svg?v=a8508166ea1139c4c51dfb08a8d3740838962b923231b3b6a9c150e34d3932a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
