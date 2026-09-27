export const name="invoice-light";
export const id="dl_42a7bf4c1a3e4ebb920d";
export const url=new URL("../icons/invoice-light.svg?v=861d9fd82aa13c162072f6fbddac89b8dbcd8464335b74988b0d2f40ea4e003b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
