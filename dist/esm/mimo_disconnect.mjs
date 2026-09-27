export const name="mimo_disconnect";
export const id="dl_ec296c83b07a8a0485b9";
export const url=new URL("../icons/mimo_disconnect.svg?v=52735b0e108dfd55f91291bfc2fcd1b52b9b40775dec6fed000e4b46b848932a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
