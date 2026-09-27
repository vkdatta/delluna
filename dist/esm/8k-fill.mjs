export const name="8k-fill";
export const id="dl_5df5401f89bdf6ae9349";
export const url=new URL("../icons/8k-fill.svg?v=4a1f0d389b67b5d800dbb9470c5f646239e15fc113859ae301caba42d642bbfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
