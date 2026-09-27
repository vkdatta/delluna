export const name="lucid_3-rat";
export const id="dl_2ec2edbd4f3945abbfd3";
export const url=new URL("../icons/lucid_3-rat.svg?v=66d9173bc68a81104f855a59ac5ccf632b11341f2e67f5c7eb88dbabed0cec31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
