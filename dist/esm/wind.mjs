export const name="wind";
export const id="dl_c283c1118a2645a5be75";
export const url=new URL("../icons/wind.svg?v=e8fc4d3a69b49081c4c37bc8344368783ee5e65267ea75ffbb8c1bda02350078",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
