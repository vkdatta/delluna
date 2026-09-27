export const name="arrows-in-duotone";
export const id="dl_ff3c1940017c4e289267";
export const url=new URL("../icons/arrows-in-duotone.svg?v=d378487596028f92bc858ab6c34292d24707653ffe7bfe39bfb9a5f0551371ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
