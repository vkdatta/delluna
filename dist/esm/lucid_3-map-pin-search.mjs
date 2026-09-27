export const name="lucid_3-map-pin-search";
export const id="dl_cbc6f09436e54304acad";
export const url=new URL("../icons/lucid_3-map-pin-search.svg?v=f4e845c42d58a6f5fafb464981801d95646c655b94dbd8b494169b34cb1834c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
