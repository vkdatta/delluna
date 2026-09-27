export const name="hand-withdraw-bold";
export const id="dl_2938d87af8d44b2e931b";
export const url=new URL("../icons/hand-withdraw-bold.svg?v=577b8b89d93bc49c3b92e186796004b7b4d50d88b29ee1d4ef43afe56251a157",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
