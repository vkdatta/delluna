export const name="scanner-fill";
export const id="dl_2387c9e47838bcac514c";
export const url=new URL("../icons/scanner-fill.svg?v=f4cc144c57f9b6b0db98297b294fc6239137e5d7452dc49ed2f978cb536ab3ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
