export const name="cpu";
export const id="dl_e3199077f5f54636b138";
export const url=new URL("../icons/cpu.svg?v=90043537d3027297eb4808ab3c6c7d8632c09beff930643ae73321f5c90b45e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
