export const name="trip";
export const id="dl_beda8f5a3dc5467abd26";
export const url=new URL("../icons/T/trip.svg?v=70429d211a6fd09ca2bb91dc12d9a78b359637800f918155b5511bf7c1919879",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
