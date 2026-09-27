export const name="arrows-down-up-bold";
export const id="dl_52096dbe5e574f49b953";
export const url=new URL("../icons/arrows-down-up-bold.svg?v=f38cc1c7f3a1e0094c8e45a72bbc5623e9c71065d4c4419ba4245d1bec0ce684",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
