export const name="data_object-fill";
export const id="dl_7eeef50eb361beb4b3bd";
export const url=new URL("../icons/data_object-fill.svg?v=e4733e6ce223458fe8ed6e2dd46911688f512b291434396a8e0f6ee19abffeae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
