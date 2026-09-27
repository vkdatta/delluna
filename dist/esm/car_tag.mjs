export const name="car_tag";
export const id="dl_31e44c9e9fb92fc71c24";
export const url=new URL("../icons/car_tag.svg?v=aac85bba8a96d52e5686b63d99a588760fa734707a3dc02ac70b089e9d8824dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
