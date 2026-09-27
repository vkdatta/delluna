export const name="payment_arrow_down-fill";
export const id="dl_75365a0da5190127b5b2";
export const url=new URL("../icons/payment_arrow_down-fill.svg?v=9f8128293d7ae2145cf3d497ac1c044fe097678db3de08c9b4cce57199f1be36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
