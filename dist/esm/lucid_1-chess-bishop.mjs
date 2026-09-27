export const name="lucid_1-chess-bishop";
export const id="dl_6804b40db5c94f5bb8fd";
export const url=new URL("../icons/lucid_1-chess-bishop.svg?v=3454f4d034f62462b5b90a2c62b4fe60db9c1d7e13923d2e7fd494017a723ca0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
