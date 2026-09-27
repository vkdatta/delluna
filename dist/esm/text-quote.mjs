export const name="text-quote";
export const id="dl_bb4fe413abd948b092bf";
export const url=new URL("../icons/text-quote.svg?v=d8bf25045856d3c3b99d140c5de1959d1d5a8a51c23e904f5d403726819bf5b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
