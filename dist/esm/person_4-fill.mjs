export const name="person_4-fill";
export const id="dl_a5ea9d4aa0ab4971bce7";
export const url=new URL("../icons/P/person_4-fill.svg?v=e82f95b2a7e9f28fc822e5906281ccd49b3a7a82e324cb2b554b44e0830fcf88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
