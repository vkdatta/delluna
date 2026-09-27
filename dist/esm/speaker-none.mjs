export const name="speaker-none";
export const id="dl_925095244e7fda4dafa0";
export const url=new URL("../icons/speaker-none.svg?v=1da3360c5689aacc5350c33c98c5ad4268bd47098168c876e931de06c8eb27eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
