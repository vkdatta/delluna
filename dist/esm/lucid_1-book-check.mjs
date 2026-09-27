export const name="lucid_1-book-check";
export const id="dl_7bd0554bb2124a53ab22";
export const url=new URL("../icons/lucid_1-book-check.svg?v=728ce76a1105c25e5f64b676dfcbc64a773ab0e59c6a3bbf0f7929ea41c09c3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
