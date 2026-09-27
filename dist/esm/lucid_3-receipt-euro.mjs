export const name="lucid_3-receipt-euro";
export const id="dl_75ebf2f2c2574232a4c5";
export const url=new URL("../icons/lucid_3-receipt-euro.svg?v=408f1f7690e53fa16764b500efa03423871ec20ba8a9f0b60ca5ee23bea9d492",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
