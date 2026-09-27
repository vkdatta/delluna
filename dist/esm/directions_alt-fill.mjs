export const name="directions_alt-fill";
export const id="dl_de40b54c08a421becf9e";
export const url=new URL("../icons/directions_alt-fill.svg?v=767198ec99ed39c4258dbf7897ad0fcb7051c09c9d62d681623eea6740721a49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
