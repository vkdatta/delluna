export const name="orthopedics-fill";
export const id="dl_e7394fb75d170a67e051";
export const url=new URL("../icons/orthopedics-fill.svg?v=64ddad42838539e2facb6eb14fbde9ba9a9f82eec1f42a3cb327f46bd634ef34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
