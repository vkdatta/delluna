export const name="bowl-food-bold";
export const id="dl_30d59260959948789436";
export const url=new URL("../icons/bowl-food-bold.svg?v=1be267e5bb49aadffba7acc14bc11995a35ef676ad4ce29558a81a2948b85e29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
