export const name="local_hospital";
export const id="dl_de7007b9f6eebfe64174";
export const url=new URL("../icons/local_hospital.svg?v=e41bbed87d21deb6772678f41e8225a80e12f15052467997988dc6117aa5effe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
