export const name="blind-fill";
export const id="dl_b008eb32f65586714623";
export const url=new URL("../icons/blind-fill.svg?v=912d0a50c300c8825f1967f6e71e5cc0a8e73850f0f85c28a3dbbe54b91dd7d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
