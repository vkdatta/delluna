export const name="two_pager_store-fill";
export const id="dl_0d35220910c8ebbddfd6";
export const url=new URL("../icons/two_pager_store-fill.svg?v=17721f9525de613df58febd39268a296eac24674fad5e93b1af8746dd541bee9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
