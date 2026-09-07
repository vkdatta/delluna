export const name="trend-down";
export const id="dl_02eafdf87daa4b0b8cbf";
export const url=new URL("../icons/T/trend-down.svg?v=9343a5295acd088106dfc585746d134b8dd78c9358cf1d7c27fbc2b917e8240a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
