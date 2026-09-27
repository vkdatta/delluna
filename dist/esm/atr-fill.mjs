export const name="atr-fill";
export const id="dl_1103b529c7922076e92b";
export const url=new URL("../icons/atr-fill.svg?v=f8f99f38e9af330db5c88e9d434ed9b958cfe3ce9ffb82f4b71194cf9eb425cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
