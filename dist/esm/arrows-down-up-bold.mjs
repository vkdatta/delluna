export const name="arrows-down-up-bold";
export const id="dl_52096dbe5e574f49b953";
export const url=new URL("../icons/arrows-down-up-bold.svg?v=0d82651b21e4749b7b506c180a7cbeabad6fb51a39df0845b8b31b3b6e5d40bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
