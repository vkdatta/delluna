export const name="text-wrap";
export const id="dl_2e3ffbe8126742b68aa3";
export const url=new URL("../icons/text-wrap.svg?v=0e2eff43458e23b8592a6a6f61cadc5f87cf795ad41b8be005a2959509680d5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
