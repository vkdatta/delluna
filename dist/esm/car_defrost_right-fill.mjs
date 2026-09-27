export const name="car_defrost_right-fill";
export const id="dl_0776cc78d7c51aef287f";
export const url=new URL("../icons/car_defrost_right-fill.svg?v=b83181e4a4df46690db1079c91a1338e52695a7d3c0fa10499e939ff71ca212b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
