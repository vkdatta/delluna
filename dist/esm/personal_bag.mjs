export const name="personal_bag";
export const id="dl_1dfc75018653d4192487";
export const url=new URL("../icons/personal_bag.svg?v=5167628930179c984a411741cde4bac9606ed60776793d588da32b096ba28149",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
