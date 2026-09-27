export const name="explicit";
export const id="dl_c262dc0249325a73e695";
export const url=new URL("../icons/explicit.svg?v=9bf3538983afb09c1c342d1a6a40acd23630e88ca3406d39e70dda5bb2377931",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
