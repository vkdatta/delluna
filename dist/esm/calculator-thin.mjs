export const name="calculator-thin";
export const id="dl_9c9cbc822ddf42718485";
export const url=new URL("../icons/calculator-thin.svg?v=8f60a1ada404d95257806a2696227987c0926ead37d571f25f9f9835e625ddc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
