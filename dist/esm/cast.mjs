export const name="cast";
export const id="dl_71e3b89680bd121bef8b";
export const url=new URL("../icons/cast.svg?v=234d2e23c3adad850db295fa5c33a8f791cf5e0debfc5a7a781e75bdae447cee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
