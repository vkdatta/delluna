export const name="lucid_3-saudi-riyal";
export const id="dl_d32ffcc0664f4b588035";
export const url=new URL("../icons/lucid_3-saudi-riyal.svg?v=ede628297f653838bbc9b473856f9343e291153c7e5abf16552579364a1330a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
