export const name="car_gear";
export const id="dl_0b394c1ae92b95a88a25";
export const url=new URL("../icons/car_gear.svg?v=89161832cb9406a403e4343358aae68325747303c5a8e68c9b3129e62937aa86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
