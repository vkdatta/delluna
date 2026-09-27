export const name="bomb-fill";
export const id="dl_b6d72f04fd6b4f989a5b";
export const url=new URL("../icons/bomb-fill.svg?v=ef5c5eb3bc980c6d6d16886d9d00dbb2663915fcfc6a60f202d505cb51f6c111",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
