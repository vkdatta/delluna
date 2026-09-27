export const name="collections_bookmark-fill";
export const id="dl_6257ea91a72fd1c53ddb";
export const url=new URL("../icons/collections_bookmark-fill.svg?v=c3beb464a8142912e704bd133fedbe96b815da56750c9f34c8aa03f99d4aa53f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
