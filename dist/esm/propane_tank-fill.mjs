export const name="propane_tank-fill";
export const id="dl_9d008f92d13b29002dc6";
export const url=new URL("../icons/propane_tank-fill.svg?v=f85a0410c016e1c2a16d6479587c59768849bba7c5dbc04999ca60cfde6edc0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
