export const name="app-store-logo-fill";
export const id="dl_1e51cfbee75a4683b52c";
export const url=new URL("../icons/app-store-logo-fill.svg?v=496da3a28d46e961c1cbfba991771c5394527994e990f3ce0726d7c7f26cbcd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
