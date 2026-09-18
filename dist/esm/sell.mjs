export const name="sell";
export const id="dl_e624a39a3b404278a880";
export const url=new URL("../icons/S/sell.svg?v=f7defdcd0219f3f8384254f1b8cbeaee8bba94f6477ea8ccd6770edda3e93a89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
