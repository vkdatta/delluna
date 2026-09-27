export const name="currency-cny-light";
export const id="dl_89f62209b75d4c609d5e";
export const url=new URL("../icons/currency-cny-light.svg?v=206d9550446363dc1f399af9ed49f805a968942f1b12b6ba1c1a33618a25aeb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
