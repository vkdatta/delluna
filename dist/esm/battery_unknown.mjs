export const name="battery_unknown";
export const id="dl_c01637ee476e456e8d3c";
export const url=new URL("../icons/B/battery_unknown.svg?v=0af9b7805c4acdeeee4093604bd511ed7e7f24e683851f4a10cc668a1c69845b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
