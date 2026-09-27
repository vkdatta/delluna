export const name="brandy-duotone";
export const id="dl_1f92b49bafc2445daf4e";
export const url=new URL("../icons/brandy-duotone.svg?v=660c5ef05660408e994cffff61a98f9d024b4b3a6a79f7bd6cece7b35dbbbc86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
