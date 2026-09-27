export const name="export-duotone";
export const id="dl_223841854d254ef199ae";
export const url=new URL("../icons/export-duotone.svg?v=f2d0c4c9c56b311210750af1167bf06c3fb4f5dc8bca931e4b289e3739159094",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
