export const name="lucid_3-shrimp";
export const id="dl_ecb60117bf6245e99252";
export const url=new URL("../icons/lucid_3-shrimp.svg?v=c63c79a12c7a776ced4c0281589a668417fade720638fc174c73ea321644688a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
