export const name="lucid_1-car-battery";
export const id="dl_d81d6c5012cc462a9ada";
export const url=new URL("../icons/lucid_1-car-battery.svg?v=ab25c0457ac1953ee4e5acd30eedeecd5eb13f7580a49c544f747f3f1e835988",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
