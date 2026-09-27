export const name="text-quote";
export const id="dl_bb4fe413abd948b092bf";
export const url=new URL("../icons/text-quote.svg?v=1803d6b4d575a1a3b4b4b9756506746785c9c84ef9196eb131f7dbbb7861a618",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
