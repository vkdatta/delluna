export const name="lucid_3-receipt-euro";
export const id="dl_75ebf2f2c2574232a4c5";
export const url=new URL("../icons/lucid_3-receipt-euro.svg?v=6cb79b5f44f7e34ab311075d82a2b6d89af4728866b4f3acb1e9a35c9c2ccd1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
