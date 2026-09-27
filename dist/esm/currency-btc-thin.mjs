export const name="currency-btc-thin";
export const id="dl_a419b7aa809a49adbd4f";
export const url=new URL("../icons/currency-btc-thin.svg?v=b7237be2677b83add4861c8a541951caa95b1d419ec8564dbcc08d198c97def5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
