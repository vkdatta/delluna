export const name="currency-inr-fill";
export const id="dl_89b0194a2e5e4e97959d";
export const url=new URL("../icons/currency-inr-fill.svg?v=95497a68107af707d2f56a639d4318c8bbec2ee99ddb20b8b2de1177e6119ca7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
