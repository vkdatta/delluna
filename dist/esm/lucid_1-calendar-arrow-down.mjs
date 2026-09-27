export const name="lucid_1-calendar-arrow-down";
export const id="dl_77e8d298e4334c8fb5c4";
export const url=new URL("../icons/lucid_1-calendar-arrow-down.svg?v=ad351589f4e9b580a3053a33419c76a40a79ae524a53e365d309cef2fc8ef1ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
