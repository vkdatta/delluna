export const name="airline_stops-fill";
export const id="dl_2f7431769877d80948e2";
export const url=new URL("../icons/airline_stops-fill.svg?v=8b77aa0abaa5849b347fa5ee1e40fb73a2991df126e5cadc8b0f141d64eb5079",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
