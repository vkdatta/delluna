export const name="phone-incoming";
export const id="dl_cf4036a23b584af29040";
export const url=new URL("../icons/phone-incoming.svg?v=7832b5c68d555ca152ccfdf4ee44cb84d78d95865d6d53e3e3abb56c27780458",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
