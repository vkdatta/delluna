export const name="file-js-duotone";
export const id="dl_37d60bdd006f47d787b1";
export const url=new URL("../icons/file-js-duotone.svg?v=b4025c8e51a19040a2f6b7fe793d43698202784669752c6a19bfabf682134c03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
