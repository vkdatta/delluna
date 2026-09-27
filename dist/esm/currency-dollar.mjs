export const name="currency-dollar";
export const id="dl_ff232ce2cd3346d0bf86";
export const url=new URL("../icons/currency-dollar.svg?v=1f7df80f1269192e7419963f8074e8327604e56cd4196ec0c2e04403d4a9fd15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
