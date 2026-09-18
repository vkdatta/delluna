export const name="battery_charging_full_2";
export const id="dl_074e110ec1564f9aa5fc";
export const url=new URL("../icons/battery_charging_full_2.svg?v=b1d283969634ff68dd56c6a736d4f385f880ba580a354c4a0ac5c591f0eb2ca9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
