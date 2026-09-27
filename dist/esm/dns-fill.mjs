export const name="dns-fill";
export const id="dl_990dc31fa389e7d929e6";
export const url=new URL("../icons/dns-fill.svg?v=2cd2e3ea4664c7c5b7ebad7823cd15701c9d62e02b53ff4c810898ff6d9bb640",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
