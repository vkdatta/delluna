export const name="comic_bubble-fill";
export const id="dl_1d88fcf6621d6e56eea4";
export const url=new URL("../icons/comic_bubble-fill.svg?v=5fc2785c374d2f3506126ff07137061c7592d09b5e6e836e8ffc4bcd84418f3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
