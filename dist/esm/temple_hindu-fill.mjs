export const name="temple_hindu-fill";
export const id="dl_6434df529e97ec490852";
export const url=new URL("../icons/temple_hindu-fill.svg?v=216b2b460437b5d96f1a7466c81f5db693acea10b92200be9b0e957a2d2330ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
