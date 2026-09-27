export const name="lucid_1-clock-arrow-right";
export const id="dl_0de566338084456581ac";
export const url=new URL("../icons/lucid_1-clock-arrow-right.svg?v=aa2dc52aeebef20e35865ccd066c296132e40a22b6d07f8e740c58f63fec17f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
