export const name="restore_page-fill";
export const id="dl_229970e49ce99d7df813";
export const url=new URL("../icons/restore_page-fill.svg?v=6a1586bf0d05783a2e881d6451fbaf87d54cd13da620d7461bb23976f57d41f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
