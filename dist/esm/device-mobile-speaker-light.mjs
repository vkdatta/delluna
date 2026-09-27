export const name="device-mobile-speaker-light";
export const id="dl_41e1a0f3a7134243b228";
export const url=new URL("../icons/device-mobile-speaker-light.svg?v=984976419e833ef4ae3cc22059f8b23d1b7b1cbf4aaeb6ffe8224b97169ddc19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
