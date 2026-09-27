export const name="2k_plus-fill";
export const id="dl_2425804b2cba0eaf44b9";
export const url=new URL("../icons/2k_plus-fill.svg?v=4b6ee99e8017ea7a853735d5d21925b1beb8a9781166bb2a15f6a11d5fd2efba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
