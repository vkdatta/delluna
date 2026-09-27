export const name="ink_selection-fill";
export const id="dl_e449e7d77dec106fd3e6";
export const url=new URL("../icons/ink_selection-fill.svg?v=a1ec3c20b839b2ed8c312948eb8f98ddb9981a96dbd24eb721fd719e2fdde2ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
