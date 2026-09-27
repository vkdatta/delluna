export const name="lucid_3-receipt-euro";
export const id="dl_75ebf2f2c2574232a4c5";
export const url=new URL("../icons/lucid_3-receipt-euro.svg?v=aa0e957af158673d471da83d474b34c4a02cf7b2247110cc859145d7491c4c7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
