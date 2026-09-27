export const name="acorn-duotone";
export const id="dl_8b89bd11d7834123b527";
export const url=new URL("../icons/acorn-duotone.svg?v=a98b80e18fa7600e47eebe1971f75632c2cc31f7582f186e9baef409903c7768",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
