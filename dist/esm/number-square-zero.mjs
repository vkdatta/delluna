export const name="number-square-zero";
export const id="dl_83593af9208d41a19728";
export const url=new URL("../icons/number-square-zero.svg?v=6b2e382148f8e7763ba5f4fefa896762b1bd07132e99d27acf6242b046d43f91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
