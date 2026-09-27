export const name="calendar-star-duotone";
export const id="dl_7e1d1cb5b5d4443e8bc2";
export const url=new URL("../icons/calendar-star-duotone.svg?v=9e3439c59edd62dfd2b43a6889a9e06baa6634f36be295fa07a9c3fdd456947e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
