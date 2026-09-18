export const name="library_add";
export const id="dl_860067d9bc5b47309f02";
export const url=new URL("../icons/library_add.svg?v=589024b784a3697187612b9ea08321be09fd95b0a115328e7c95da50bd4820be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
