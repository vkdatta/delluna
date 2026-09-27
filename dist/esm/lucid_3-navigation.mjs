export const name="lucid_3-navigation";
export const id="dl_0bdea1773f4c47efb4ba";
export const url=new URL("../icons/lucid_3-navigation.svg?v=aec8c84de7189f40ef155ffad7974730b7a959a0eac6b980056f442d8017be6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
