export const name="air_purifier_gen";
export const id="dl_e03c091dd4dd4148add6";
export const url=new URL("../icons/air_purifier_gen.svg?v=225241585fd63e3041cb102ff8a2974d3515007242828e5b80e7b97bf3b401ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
