export const name="phone-light";
export const id="dl_9b1048c077f74257b87d";
export const url=new URL("../icons/phone-light.svg?v=d5362bae8aa2010ca62cb65ae35f1be46df0a660656bb5854c87477301ddd7da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
