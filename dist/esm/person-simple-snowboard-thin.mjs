export const name="person-simple-snowboard-thin";
export const id="dl_efcd7d40fe7c48f398c1";
export const url=new URL("../icons/person-simple-snowboard-thin.svg?v=126c0b28b65ea4996fb6a84208058ff4f94291eee4ec6807bcd130e336f11da9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
