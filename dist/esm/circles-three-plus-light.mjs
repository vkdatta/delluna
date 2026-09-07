export const name="circles-three-plus-light";
export const id="dl_bf88a26e90374fdaa8be";
export const url=new URL("../icons/circles-three-plus-light.svg?v=e10aea1d20b4e6735fd67c64c8f89037217bbef64f500ca5ffe37aefd1766147",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
