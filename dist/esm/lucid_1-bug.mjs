export const name="lucid_1-bug";
export const id="dl_bc6eeccfcd784b6283fa";
export const url=new URL("../icons/lucid_1-bug.svg?v=d66d1d5caec4136433ab298ca43a59dc313c82240c9cf7ec5ce5a8021f14bf32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
