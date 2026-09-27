export const name="finance_chip-fill";
export const id="dl_8feb2e812a185f6e5a8f";
export const url=new URL("../icons/finance_chip-fill.svg?v=7c939de068ebcaee32d9d36d3df3ae03694aa6fa11254cf3f41f36c194c37ab6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
