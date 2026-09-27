export const name="thumbnail_bar-fill";
export const id="dl_de28ad5f63f41fdb2b41";
export const url=new URL("../icons/thumbnail_bar-fill.svg?v=d7a554f86cbb174f20ee2993ae7ad0177f457bcfe8c238322d4c6ea88a03aeda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
