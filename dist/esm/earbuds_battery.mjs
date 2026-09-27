export const name="earbuds_battery";
export const id="dl_1fde616141d5b40e0a26";
export const url=new URL("../icons/earbuds_battery.svg?v=b4189b1ebfa708244d5dbd3e8cdabfe195b4ef6973773e1d198a75bbb08a0f2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
