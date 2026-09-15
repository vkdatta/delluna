export const name="bike_scooter";
export const id="dl_4b3a768fea594f3cb005";
export const url=new URL("../icons/B/bike_scooter.svg?v=0de93dfdb6eb4537aad8483159372f0167d96d83a903c47fb4f75df1114d3c4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
