export const name="stack-overflow-logo-bold";
export const id="dl_90e5a48fc86713810d07";
export const url=new URL("../icons/stack-overflow-logo-bold.svg?v=0a41d5e885c79688bf6d4bd60e97bd8531589b715642e1c2f04d1833ca6e5127",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
