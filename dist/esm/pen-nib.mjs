export const name="pen-nib";
export const id="dl_ab6ad5fcd1874003b9a7";
export const url=new URL("../icons/pen-nib.svg?v=1dd351c36da3639df0efe0c73d2524f5c00ca3e1ca2c8f66cc48d0e60f162736",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
