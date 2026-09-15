export const name="bedroom_child-fill";
export const id="dl_abc4e52ebc0e4fe9b851";
export const url=new URL("../icons/B/bedroom_child-fill.svg?v=13a2b259ef44dcd2cfbcbe36001d58e661aacb033f33a373f327142aad483e24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
