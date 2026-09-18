export const name="leak_remove-fill";
export const id="dl_5090e93c61f84d1ba7be";
export const url=new URL("../icons/L/leak_remove-fill.svg?v=e9a02bd0b8e674b1257e3e141f71b16623bcb0490d38ac410d89b10b917dfb5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
