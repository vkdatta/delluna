export const name="receipt-bold";
export const id="dl_b72ba72103484398b85a";
export const url=new URL("../icons/receipt-bold.svg?v=f4c35e652357189befe063f2e20ac79aba8cf01c992d27175bff594fa0fcbbbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
