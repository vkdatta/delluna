export const name="document_scanner-fill";
export const id="dl_8bc709c16f9d83fbe2eb";
export const url=new URL("../icons/document_scanner-fill.svg?v=9bd5c8784477e4d67b8a290350e9bee6bddf19cf84f493a447f2c554c98e0be3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
