export const name="lucid_2-diamond-minus";
export const id="dl_2276d08c29a84eb1b762";
export const url=new URL("../icons/lucid_2-diamond-minus.svg?v=336011545f755f48f6688e63c3e4be15cd1194823434ddec84d2a81ed451a1a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
