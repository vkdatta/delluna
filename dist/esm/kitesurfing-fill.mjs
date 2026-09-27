export const name="kitesurfing-fill";
export const id="dl_571fe2054c3755a728d9";
export const url=new URL("../icons/kitesurfing-fill.svg?v=c2f253f8f1685065259691aefb8b26fa432f3f8bd6e715e2c662474843ec219f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
