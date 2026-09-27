export const name="arrows-horizontal-thin";
export const id="dl_0c9419053a134ce4a3df";
export const url=new URL("../icons/arrows-horizontal-thin.svg?v=35082f2f826fa79ccb8b1a14f3d0906603ff3c477bf15bcc8971eb4b2b11384a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
