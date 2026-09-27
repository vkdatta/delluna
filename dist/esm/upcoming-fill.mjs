export const name="upcoming-fill";
export const id="dl_e6661f24dc92932bed3b";
export const url=new URL("../icons/upcoming-fill.svg?v=5a37ec878e9199883c865650f2242905d638353343827d51858d415b99ad55e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
