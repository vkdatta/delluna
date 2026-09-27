export const name="discover_tune";
export const id="dl_c108d45eaa3cb5ecb4e8";
export const url=new URL("../icons/discover_tune.svg?v=f714e52166df7e74774ac534d18e2a5724c36416a1d55294c9051719904f45cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
