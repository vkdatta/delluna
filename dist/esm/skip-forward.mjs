export const name="skip-forward";
export const id="dl_7fa825f12fee40876490";
export const url=new URL("../icons/skip-forward.svg?v=31eed57e25a41f0e117867d48875db55694c2e04708f9b651f4c5eb351ca6787",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
