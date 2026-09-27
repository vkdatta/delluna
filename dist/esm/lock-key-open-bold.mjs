export const name="lock-key-open-bold";
export const id="dl_9448b948442a40a8bdbe";
export const url=new URL("../icons/lock-key-open-bold.svg?v=dc1df8df6b34f31725403d402f19397c257c6c182948d477898f61952ab03ea1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
