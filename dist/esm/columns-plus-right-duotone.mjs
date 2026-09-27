export const name="columns-plus-right-duotone";
export const id="dl_6b748a4f004f40c486eb";
export const url=new URL("../icons/columns-plus-right-duotone.svg?v=2ce343cd4f091c62217588fe03416b6521fcc8e23ca2136e14b5fe0ff8814327",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
