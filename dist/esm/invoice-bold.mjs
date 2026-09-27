export const name="invoice-bold";
export const id="dl_3deecd4b683546c1bebe";
export const url=new URL("../icons/invoice-bold.svg?v=799936d7551b3ba9fea6ded1eefed86e0919c99345eab71d6185ba50872b1154",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
