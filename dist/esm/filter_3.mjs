export const name="filter_3";
export const id="dl_7d602b01f3c5e53aeef0";
export const url=new URL("../icons/filter_3.svg?v=eb5ca61d7e6a789c66cbdf91709a0957ae6a0ee76eac25dfe2c9ecdb1f9e0a53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
