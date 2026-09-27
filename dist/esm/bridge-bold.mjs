export const name="bridge-bold";
export const id="dl_e3ba91e728be45f2887b";
export const url=new URL("../icons/bridge-bold.svg?v=5c1f67a43858ac52e5f234a8fd1be5f464f82d64ca9dcf3e04a052f0a46ebab0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
