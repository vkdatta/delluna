export const name="airline_seat_flat_angled";
export const id="dl_ad5ba44380ef6fdaceea";
export const url=new URL("../icons/airline_seat_flat_angled.svg?v=b4fe88735bb21817bf5665f1ae3b50872d1804044216723a1af02fb243a147d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
