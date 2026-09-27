export const name="lucid_3-saudi-riyal";
export const id="dl_d32ffcc0664f4b588035";
export const url=new URL("../icons/lucid_3-saudi-riyal.svg?v=1ce7caca4d53666be26878d1402c138abd8fb15a5390e041aaa5b78afe55abd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
