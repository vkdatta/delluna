export const name="address-book-tabs-light";
export const id="dl_699ebe4b3c10472785ac";
export const url=new URL("../icons/address-book-tabs-light.svg?v=f01667c7950fa9797f87917c4fea71e2eb0f337e9a77f3603a3c196d0063078d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
