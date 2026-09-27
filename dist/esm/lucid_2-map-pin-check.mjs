export const name="lucid_2-map-pin-check";
export const id="dl_440ebe6c8db04fa5bb56";
export const url=new URL("../icons/lucid_2-map-pin-check.svg?v=a6d7d14d6e74d5657be351666153c63e77b60ed5b5cdc527207e739c124b51e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
