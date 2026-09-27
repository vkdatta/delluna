export const name="laptop_mac-fill";
export const id="dl_af5a4ddbf2750fbdac9e";
export const url=new URL("../icons/laptop_mac-fill.svg?v=cbf2e62501652038bcff2034c50a0b93373b616faa7f2d5c6772c16a38c80176",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
