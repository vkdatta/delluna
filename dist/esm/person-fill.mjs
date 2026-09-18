export const name="person-fill";
export const id="dl_04e99296c9eb47f29e4e";
export const url=new URL("../icons/P/person-fill.svg?v=9fe949a7db68fb9cd7a892277578ffc750d8bac683cd1c4e74da2d0ee02c2efa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
