export const name="emoji_symbols-fill";
export const id="dl_fc8f616247afc6b8c93b";
export const url=new URL("../icons/emoji_symbols-fill.svg?v=f500460388c306d2f163c19e4eba4f17b42355006f8a454659a4b88390f1e24b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
