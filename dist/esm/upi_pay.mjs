export const name="upi_pay";
export const id="dl_56fb12dc37b1404bba1c";
export const url=new URL("../icons/U/upi_pay.svg?v=196956866d8fba3eefae7878cf1ea7ce444da8d5ad876e568c92fb65c9b3eb76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
