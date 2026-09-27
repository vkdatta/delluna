export const name="person-simple-snowboard-duotone";
export const id="dl_6569a44512fa4e968a1d";
export const url=new URL("../icons/person-simple-snowboard-duotone.svg?v=846e32e7aadeeaff1a41e96e0bfac0006bce6fafaa6b27f23f580e62e9291b8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
