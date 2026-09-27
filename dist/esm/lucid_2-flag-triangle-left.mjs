export const name="lucid_2-flag-triangle-left";
export const id="dl_0753585f9a8546a8b12d";
export const url=new URL("../icons/lucid_2-flag-triangle-left.svg?v=65d9b30c292d7aa7c5b425c64e9935cd2cdaba9ddd6499096bfa933809b8bf69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
