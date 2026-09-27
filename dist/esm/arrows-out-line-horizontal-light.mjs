export const name="arrows-out-line-horizontal-light";
export const id="dl_d5a099a0580e42ec8134";
export const url=new URL("../icons/arrows-out-line-horizontal-light.svg?v=5b387309bcd4df576a3dd328a81bffe77559bbfb492771fb25619feebc524f94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
