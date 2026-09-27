export const name="skip-forward-light";
export const id="dl_befb0981ce1a502c5425";
export const url=new URL("../icons/skip-forward-light.svg?v=0daef7b247305ac8387620569061d96d7beff78c567e29bdc9572da0b9857e91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
