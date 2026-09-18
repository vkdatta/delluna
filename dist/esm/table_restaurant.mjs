export const name="table_restaurant";
export const id="dl_38591d4de82f42039832";
export const url=new URL("../icons/T/table_restaurant.svg?v=20589d1524a755837cacbaa6dc2e287537677a61f031478a3407d23e482e41e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
