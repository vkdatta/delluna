export const name="lucid_3-playing-cards-fan";
export const id="dl_c38c721dbdae487c90af";
export const url=new URL("../icons/lucid_3-playing-cards-fan.svg?v=459df3c2c7f81161a756023da1806da92dcfcae72b20583b7dcb9167bea750a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
