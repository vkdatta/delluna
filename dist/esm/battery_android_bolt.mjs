export const name="battery_android_bolt";
export const id="dl_1b7785251abf6a3ce68a";
export const url=new URL("../icons/battery_android_bolt.svg?v=d9d6ea46ccfa4a033f2172564bae35eb4840f31b89ca181348bbb2860abb454d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
