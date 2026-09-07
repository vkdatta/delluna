export const name="arrows-horizontal-thin";
export const id="dl_0c9419053a134ce4a3df";
export const url=new URL("../icons/arrows-horizontal-thin.svg?v=56bb9ac2f2a863bf4824b1a878937a0a0cafc97fd7ffa72f196e5a766d1f5c79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
