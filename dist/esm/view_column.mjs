export const name="view_column";
export const id="dl_73605f4b6ebc0e6457bf";
export const url=new URL("../icons/view_column.svg?v=84a90e328f7e84724812d217095d96c207d17a482298a41d4bac133ee5ab0f21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
