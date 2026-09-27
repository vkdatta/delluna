export const name="battery_charging_full_2";
export const id="dl_14b6ef823edf0edcd4d5";
export const url=new URL("../icons/battery_charging_full_2.svg?v=28572af15ec4a6de676b30ed9ad9350756b6a929bc17902752c63f828a3e2a71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
