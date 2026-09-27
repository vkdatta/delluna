export const name="diamond-plus";
export const id="dl_7c974ae18a7b4d0b383b";
export const url=new URL("../icons/diamond-plus.svg?v=6df4c66741d8af83b9f2ee65af86a16705933696374d8cf934e18885428edf04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
