export const name="lucid_3-receipt-cent";
export const id="dl_f38228bd3b9946199386";
export const url=new URL("../icons/lucid_3-receipt-cent.svg?v=142465aa99d0c3ce6fc1452079db5d2a79b5d9ca66d41bbfdd2b62a0773db990",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
