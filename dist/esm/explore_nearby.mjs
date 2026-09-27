export const name="explore_nearby";
export const id="dl_cab64cc3ce638cbcbd0e";
export const url=new URL("../icons/explore_nearby.svg?v=d4f20adc41fd25eb11301ec17441a0116eb52570dd179d180ea9a9a9fbaedb5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
