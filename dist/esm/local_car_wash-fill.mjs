export const name="local_car_wash-fill";
export const id="dl_7bab72d722527b5b047c";
export const url=new URL("../icons/local_car_wash-fill.svg?v=24dcfdc98fff55251fec9ff646cff4ccbb5f209eb6c649aa3de90ae98d8d24ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
