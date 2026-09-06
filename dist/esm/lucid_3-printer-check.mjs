export const name="lucid_3-printer-check";
export const id="dl_4ae3be12b27d414c889f";
export const url=new URL("../icons/lucid_3-printer-check.svg?v=e3b6192aa35b529b0e74cf36bbd11e259c653e645b7e4fc6c5c33e8f978e34ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
