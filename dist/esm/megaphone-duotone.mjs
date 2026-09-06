export const name="megaphone-duotone";
export const id="dl_f9bf188c1bb445aea458";
export const url=new URL("../icons/megaphone-duotone.svg?v=04f73a1727252b5650265cb294d713988c5b353e83714c8674d64376170f678c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
