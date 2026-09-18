export const name="trip_origin";
export const id="dl_953992d9fc0c480ba6ef";
export const url=new URL("../icons/trip_origin.svg?v=25e676484f279078bf8eaf8ec9d8b5564be0b064ae36f719112fa0b72fa1ffaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
