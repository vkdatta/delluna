export const name="football-helmet";
export const id="dl_a282dbced9b740cea3d7";
export const url=new URL("../icons/football-helmet.svg?v=cc07195d4b35213d74cc7eadc28f0a0ee4bf0d443433e9a6bf2783339842c80e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
