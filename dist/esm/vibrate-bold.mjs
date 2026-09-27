export const name="vibrate-bold";
export const id="dl_e2ab2bc18be0b6d9a146";
export const url=new URL("../icons/vibrate-bold.svg?v=a62952d3902d63ca2d1977ceba1a3ae35362fdddba867e411191e67d16df961f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
