export const name="two_pager-fill";
export const id="dl_f6e98ddaf12abb288031";
export const url=new URL("../icons/two_pager-fill.svg?v=6d0a5acc3ea38c583891e35910c7d4998dc771c40d5c1d926a8d0ee1d94aebf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
