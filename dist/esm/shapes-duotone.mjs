export const name="shapes-duotone";
export const id="dl_6920ce452510445b957d";
export const url=new URL("../icons/S/shapes-duotone.svg?v=d8c9bbb8407539772fa655c0fba8d3a1d7a1572274916d64adf6bcf3f547db8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
