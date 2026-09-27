export const name="productivity";
export const id="dl_585c09bc41ec6118bea1";
export const url=new URL("../icons/productivity.svg?v=cd8b57f3783fcaa531cb2a803d1857c25a56000ee61535021c5ed0ff393d08b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
