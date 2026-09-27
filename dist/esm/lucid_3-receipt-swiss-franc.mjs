export const name="lucid_3-receipt-swiss-franc";
export const id="dl_025b184694f349649c0b";
export const url=new URL("../icons/lucid_3-receipt-swiss-franc.svg?v=311804100d44aa085009db805f94facbf1df35c6a3512e054a46dc821c665bd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
