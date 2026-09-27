export const name="expand_circle_down";
export const id="dl_f6e1270bfb49908f2b8b";
export const url=new URL("../icons/expand_circle_down.svg?v=30a9b97ec88b4c8033f28c18a4df79c57791b3ad0ee537a52cbb53c4033de1a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
