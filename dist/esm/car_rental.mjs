export const name="car_rental";
export const id="dl_0d7fb27a9ef342599e7b";
export const url=new URL("../icons/C/car_rental.svg?v=2315d48f55e4ddaf30816b10baf210aafe78e45c4873db1cee32777cc3c5d90b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
