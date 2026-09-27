export const name="battery_charging_50";
export const id="dl_d2d36621b3c7953e96eb";
export const url=new URL("../icons/battery_charging_50.svg?v=9db2eeee19fcd06499abdeb140bba5c0fd2b9790fee46533271d0956510cb98a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
