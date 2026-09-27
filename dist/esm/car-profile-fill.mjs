export const name="car-profile-fill";
export const id="dl_9268c29c333344c49133";
export const url=new URL("../icons/car-profile-fill.svg?v=6c015c4fed7acdc05a7c000684f10c10ffbf85da96216b04cb4a3cfe7292392a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
