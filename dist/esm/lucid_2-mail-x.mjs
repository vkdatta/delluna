export const name="lucid_2-mail-x";
export const id="dl_cf1e9b2104c242bd99ec";
export const url=new URL("../icons/lucid_2-mail-x.svg?v=091275ceaefe3ad9003a9664393ece13bf4b92d3db14443d894c93aff99ae598",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
