export const name="plumbing";
export const id="dl_87e8893490191ab88b2a";
export const url=new URL("../icons/plumbing.svg?v=efb00bea6212cba10b827c5842d96f69dc385860e2a5980049388cfa332a02b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
