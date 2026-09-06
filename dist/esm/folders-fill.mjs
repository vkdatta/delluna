export const name="folders-fill";
export const id="dl_bec0536361364332b2e5";
export const url=new URL("../icons/folders-fill.svg?v=7f4e4f6a637ef4a83e962f40fcbb614799c163c485c0072bf0d71a294f2b8f01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
