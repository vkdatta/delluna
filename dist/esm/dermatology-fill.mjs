export const name="dermatology-fill";
export const id="dl_acd88474c136eb6c9987";
export const url=new URL("../icons/dermatology-fill.svg?v=68cd34d842ce02a7c18ec3df4b2917ea687ce76d1dbb591f069554253ced2d33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
