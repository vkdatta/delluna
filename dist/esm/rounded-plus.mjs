export const name="rounded-plus";
export const id="dl_045b21720347428cb16d";
export const url=new URL("../icons/add/rounded-plus.svg?v=973805065939eb97d2c05d37efba39ced755ac23b80e76fa4f88edd399a8a079",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
