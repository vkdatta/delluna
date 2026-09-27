export const name="counter_4";
export const id="dl_e3cae37b314be162bf93";
export const url=new URL("../icons/counter_4.svg?v=6c57d876bde72b57fe1ae0fb979715f9d469a71c68d5d8476183c0b046eb5572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
