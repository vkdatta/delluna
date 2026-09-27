export const name="doorbell_3p-fill";
export const id="dl_71bfed725fa25a3fe679";
export const url=new URL("../icons/doorbell_3p-fill.svg?v=8df643626e7081719c8bca6f748f1199f73c277d980937781ae3e22c175fbc2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
