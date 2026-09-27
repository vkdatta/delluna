export const name="check-square-offset-fill";
export const id="dl_75618cd2b5a44740b725";
export const url=new URL("../icons/check-square-offset-fill.svg?v=648e23c9a41a871bddd09ab2c3da185107be698aacbe70834dbc596b30e89637",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
