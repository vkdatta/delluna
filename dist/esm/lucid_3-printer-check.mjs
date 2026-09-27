export const name="lucid_3-printer-check";
export const id="dl_4ae3be12b27d414c889f";
export const url=new URL("../icons/lucid_3-printer-check.svg?v=05591b8197a4de1c6c8f61151c6b38d0eb0305f3845dadeda32443ebbb3df7e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
