export const name="square-half-thin";
export const id="dl_b5b439adfbd962a97b6b";
export const url=new URL("../icons/square-half-thin.svg?v=ee53f5dd702d41057c00c6ed4f2247829001a14949de3a17fc0294ee86dfbbee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
