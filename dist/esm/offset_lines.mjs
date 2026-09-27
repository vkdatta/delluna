export const name="offset_lines";
export const id="dl_ceda1c7b8dd24d2ab211";
export const url=new URL("../icons/offset_lines.svg?v=d133987f2921fa279b5173293b8dbd261b5661abecf1cabe755f9844b3c4ced0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
