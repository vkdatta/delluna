export const name="account_box-fill";
export const id="dl_517685ec09f34e998d9a";
export const url=new URL("../icons/A/account_box-fill.svg?v=fe835cd181c81d2d1d16999dfc2c7be1cefe14cde0cd03e2220ca33616bf7fae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
