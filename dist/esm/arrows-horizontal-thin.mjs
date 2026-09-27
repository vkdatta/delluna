export const name="arrows-horizontal-thin";
export const id="dl_0c9419053a134ce4a3df";
export const url=new URL("../icons/arrows-horizontal-thin.svg?v=87bf7d0141e113db31510f1af975ff6ecdaab4a65e4a036a3baab6f424acfdbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
