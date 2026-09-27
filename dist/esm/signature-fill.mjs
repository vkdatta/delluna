export const name="signature-fill";
export const id="dl_c61d0bbd6e1e2cb86ac3";
export const url=new URL("../icons/signature-fill.svg?v=366df711fca2bcd0eb16febea456cedef54082480410ba56467c817552bc0926",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
