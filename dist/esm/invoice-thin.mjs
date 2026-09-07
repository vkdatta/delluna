export const name="invoice-thin";
export const id="dl_d3ac2924817541e38f6e";
export const url=new URL("../icons/invoice-thin.svg?v=ed444feb4758bb3ccdf84eed27ff093817853edaa668f2b1e45af9b0378247ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
