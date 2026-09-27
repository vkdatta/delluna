export const name="lucid_3-plug-zap";
export const id="dl_a8531f1aa1ce41f8a44b";
export const url=new URL("../icons/lucid_3-plug-zap.svg?v=80e4ada1c33648f550d6fbc3305fd4597130e8891a598fd12c8785a95071de7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
