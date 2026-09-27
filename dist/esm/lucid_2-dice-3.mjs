export const name="lucid_2-dice-3";
export const id="dl_f909c83767ec4da785e8";
export const url=new URL("../icons/lucid_2-dice-3.svg?v=07b9095e0379e73b51ce7cae3a6478e715d6cff0e98319816233685f057830a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
