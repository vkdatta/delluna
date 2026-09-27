export const name="phone-incoming-light";
export const id="dl_e2b3fdfe06844f128c88";
export const url=new URL("../icons/phone-incoming-light.svg?v=e52299a87d5cfc41173a7c09d43010759a4ed254575eb0761331c29b8ec3918a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
