export const name="translate-fill";
export const id="dl_db697d5db9dd4f56a6dd";
export const url=new URL("../icons/T/translate-fill.svg?v=9155f9dcd7e87282f7f949a350f50f82234e83ecd121db112cb1d110538ece77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
