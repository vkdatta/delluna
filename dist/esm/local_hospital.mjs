export const name="local_hospital";
export const id="dl_51a7d9cc1f3b43e9b658";
export const url=new URL("../icons/local_hospital.svg?v=a70d68803d28181d150c9ece52ebb8dabe8bced2ab9d27390bbe6cf5f0b23aae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
