export const name="phone-outgoing-duotone";
export const id="dl_a67f6ea4aab94a4d916b";
export const url=new URL("../icons/phone-outgoing-duotone.svg?v=14c056233c2093444fa2e76d94ac57ed13f696d1f5e71f1daa1433f262d469c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
