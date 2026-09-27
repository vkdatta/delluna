export const name="microwave_gen-fill";
export const id="dl_4c10df33a7143c434cbe";
export const url=new URL("../icons/microwave_gen-fill.svg?v=724b2099ad1b3fafd902be9d444486f8c64d7869f9d04db08ca6bf17c3b29cf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
