export const name="call_received-fill";
export const id="dl_731af7c91aee3216ceef";
export const url=new URL("../icons/call_received-fill.svg?v=75566cd9eb007122fb662b5a614a2a01e357d2aa1881dfe057633cca839890de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
