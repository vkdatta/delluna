export const name="text-quote";
export const id="dl_bb4fe413abd948b092bf";
export const url=new URL("../icons/text-quote.svg?v=2a90586863981f06968b018fdbbd85069ec93a8314b6e2046a8a78d7c8f8c76e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
