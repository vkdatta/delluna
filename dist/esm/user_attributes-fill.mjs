export const name="user_attributes-fill";
export const id="dl_135f041d870d28e446e5";
export const url=new URL("../icons/user_attributes-fill.svg?v=6e54d24d9cae4faf9f84a1ca1045facc60974d4631196945b0aa9dfac6a86d16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
