export const name="code-simple-fill";
export const id="dl_3c409a766a9f4de995bf";
export const url=new URL("../icons/code-simple-fill.svg?v=9a6720891e2d6f2d36bc66f641db0ec6baf61cdd3687c371311825a8a39a5957",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
