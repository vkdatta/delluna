export const name="routine-fill";
export const id="dl_4ae449daf74c677dec2f";
export const url=new URL("../icons/routine-fill.svg?v=7fba2c174d56b2ecfd4c98173abaee37bd5a1a0790b2b40529c602dd73c6c6ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
