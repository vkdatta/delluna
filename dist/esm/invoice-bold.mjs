export const name="invoice-bold";
export const id="dl_3deecd4b683546c1bebe";
export const url=new URL("../icons/invoice-bold.svg?v=98a25aa49b5647175d697b95df3f5c6066fecd61b350f7daac31f3b642279336",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
