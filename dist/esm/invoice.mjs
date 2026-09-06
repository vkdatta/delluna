export const name="invoice";
export const id="dl_de166a55ab124cf9a9e6";
export const url=new URL("../icons/invoice.svg?v=f51c2c4b5c63ba6dc40ab81413946531b2443f23741283572b64df5d6fde536e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
