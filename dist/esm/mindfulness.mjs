export const name="mindfulness";
export const id="dl_588600563eb465c6c5f6";
export const url=new URL("../icons/mindfulness.svg?v=4350c8e147a72ac1f9ea280a5bf26202e365dcf81f4144970824f943e7249b3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
