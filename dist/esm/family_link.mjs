export const name="family_link";
export const id="dl_b9d25ce63c34828c84ba";
export const url=new URL("../icons/family_link.svg?v=62988bddea104acbd520b59eec66796f461ecf6419698bea302b9df938ef2e5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
