export const name="bridge-thin";
export const id="dl_a85c4464f3b34b30b506";
export const url=new URL("../icons/bridge-thin.svg?v=66cd7b74e2281eb9acd2d9bb337a0d7a84f1af780e346c63c1704f8188dc594f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
