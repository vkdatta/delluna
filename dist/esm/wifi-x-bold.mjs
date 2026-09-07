export const name="wifi-x-bold";
export const id="dl_251f207ef3444ddcad7e";
export const url=new URL("../icons/W/wifi-x-bold.svg?v=ad9f71a557a31c4ba8a1c530fe349e5c87f16d5265fb8b84e05f9830dc516d84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
