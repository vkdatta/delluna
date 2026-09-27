export const name="invoice";
export const id="dl_de166a55ab124cf9a9e6";
export const url=new URL("../icons/invoice.svg?v=2829922505a95e8feb1cef6987a62d9958e92a2dece3d0dde2466019d720c2b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
