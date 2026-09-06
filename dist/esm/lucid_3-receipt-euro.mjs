export const name="lucid_3-receipt-euro";
export const id="dl_75ebf2f2c2574232a4c5";
export const url=new URL("../icons/lucid_3-receipt-euro.svg?v=e4035669f96c601846b6b46219569a4afc344d714d5bf45f169b2b9a639a1057",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
