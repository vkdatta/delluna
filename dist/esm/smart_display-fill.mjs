export const name="smart_display-fill";
export const id="dl_2800811acac8426bb56a";
export const url=new URL("../icons/S/smart_display-fill.svg?v=dd784326b342fba32a2443704419e9ee30186cc487f21fecd77cc652761ab382",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
