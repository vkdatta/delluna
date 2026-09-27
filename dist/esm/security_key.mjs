export const name="security_key";
export const id="dl_fa8d4f17aca4768bc208";
export const url=new URL("../icons/security_key.svg?v=aba4b0a705dc65f1cb04135f6c71a5953eea958b947c4677a4f595d192b1e6d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
