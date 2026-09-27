export const name="squares-four-fill";
export const id="dl_934a57a9eed96ba80b00";
export const url=new URL("../icons/squares-four-fill.svg?v=713feef38654594474c051d2c58ba5dbf9dc15ebb00bbde842a8243d983eb9b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
