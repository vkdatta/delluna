export const name="numpad-light";
export const id="dl_663f9524b7f849a6af2e";
export const url=new URL("../icons/numpad-light.svg?v=d63ea953fa53ada30cd677fd64084a7d760bc8677d536ec41f6b7ce940e655ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
