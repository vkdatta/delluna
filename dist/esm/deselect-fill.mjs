export const name="deselect-fill";
export const id="dl_b81ae0faf4a64373af0a";
export const url=new URL("../icons/deselect-fill.svg?v=0eaa9ebc0688bb782e163ba685d70af3db137c719bc7c2bfdffd1097b0ce1ccd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
