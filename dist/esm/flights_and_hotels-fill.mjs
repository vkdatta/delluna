export const name="flights_and_hotels-fill";
export const id="dl_5082b6906bf2c3a303b1";
export const url=new URL("../icons/flights_and_hotels-fill.svg?v=7bf2123273dfb7d78e3ce2d462102d90a4cd7a2ab0102626c4609865fe7cf332",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
