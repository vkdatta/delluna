export const name="currency_rupee_circle-fill";
export const id="dl_5a2096c69427483aa0bd";
export const url=new URL("../icons/C/currency_rupee_circle-fill.svg?v=f7a450230726d4bd91e4a3353f7d0c640dbd3f45271931486f53c4c710b52d23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
