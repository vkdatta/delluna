export const name="invoice";
export const id="dl_de166a55ab124cf9a9e6";
export const url=new URL("../icons/invoice.svg?v=48ce7b565bbfb1826e36fc4c3fb43ee3316d66a544e8b30cd763b523add4ab4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
