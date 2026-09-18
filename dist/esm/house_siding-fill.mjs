export const name="house_siding-fill";
export const id="dl_082a9e521e904024982b";
export const url=new URL("../icons/H/house_siding-fill.svg?v=365acdaee8598f4189795e3a030628ee0fd69f31265fe3ef1f9a80614a75769f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
