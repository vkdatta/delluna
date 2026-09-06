export const name="script_f";
export const id="dl_55dfb92c0c434c699787";
export const url=new URL("../icons/script_f.svg?v=08b884078d5681300d1551bacfa1d5e83b0a4ce55df384646c87eb84d088639e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
