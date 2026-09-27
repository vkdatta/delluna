export const name="payments-fill";
export const id="dl_330e68dad82ccfbe537f";
export const url=new URL("../icons/payments-fill.svg?v=d1a632a65eec7f79d403af2ddda9b38f43e6639e9df2ca529721b4444fdc8726",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
