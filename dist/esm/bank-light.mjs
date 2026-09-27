export const name="bank-light";
export const id="dl_982f693de0aa4144981f";
export const url=new URL("../icons/bank-light.svg?v=a341b540ea97096100a2c2fa246e68e9706a947970b4fdd57f28cf8e7d126f1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
