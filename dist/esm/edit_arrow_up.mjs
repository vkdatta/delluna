export const name="edit_arrow_up";
export const id="dl_6e9e60f3515a46990fe3";
export const url=new URL("../icons/edit_arrow_up.svg?v=079d0565ac9b81580d62b6ce4e7acea83ffe925a2ebc7890f071959e906e287e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
