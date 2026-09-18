export const name="earbuds_battery";
export const id="dl_e6cacc5043b44a0abee7";
export const url=new URL("../icons/earbuds_battery.svg?v=89ea4362a4e15364db9fdd06f61be19f5b5d22bf15b4a449e71dfd716fbd475e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
