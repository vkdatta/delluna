export const name="bridge";
export const id="dl_7c165ba24cc045aaa4e9";
export const url=new URL("../icons/bridge.svg?v=82f37bae1c1263af637ccce314f0716f0b35cf6917d74426e6460ba617b3e3a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
