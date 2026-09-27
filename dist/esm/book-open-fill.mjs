export const name="book-open-fill";
export const id="dl_320644072af84426a782";
export const url=new URL("../icons/book-open-fill.svg?v=aa9e15296ff4a915478a3a53fdbdb7c951dd4afad5b1e3035520ba8060b5728f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
