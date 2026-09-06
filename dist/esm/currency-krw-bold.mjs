export const name="currency-krw-bold";
export const id="dl_d235f91e8dc84920bf63";
export const url=new URL("../icons/currency-krw-bold.svg?v=cb0fcc22f36e9fc53cdced57c952f798b3a7e910976f66253f0b74cfa1c929c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
