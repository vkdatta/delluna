export const name="car-profile";
export const id="dl_6eedd93b29dc48c2918e";
export const url=new URL("../icons/car-profile.svg?v=a0128e93586ffbe63758975f28219adbc2b3ebdf7438cc784d58812c9fe16599",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
