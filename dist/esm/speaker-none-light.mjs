export const name="speaker-none-light";
export const id="dl_a4d95fc77f7a2dfc28d0";
export const url=new URL("../icons/speaker-none-light.svg?v=3e5b1f5d88a5c6b827dbbc0b43c6c4af2404e590c311f31defacb09475e5902a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
