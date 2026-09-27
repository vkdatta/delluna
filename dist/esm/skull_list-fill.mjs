export const name="skull_list-fill";
export const id="dl_5ab125805020d51f6aea";
export const url=new URL("../icons/skull_list-fill.svg?v=a52c2a41cf6f360f897c5bbaca525b30e18f0053479b41fcf9d5e683d0b3870e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
